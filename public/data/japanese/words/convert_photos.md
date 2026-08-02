# Converting vocabulary photos into CSV word lists

This document describes how to turn a photo of a Japanese vocabulary table
into rows in the CSV word lists used by the audio flashcard scripts
(`download.py`, `play.py`, `with_skip.py`, `check_duplicates.py`).

## Overview

Given a photo containing Japanese words (a mix of hiragana/kanji words and
katakana words), read every word, classify it, skip anything already present,
and append the new rows to the correct CSV — respecting the schema and the
100-word-per-file split rule.

## CSV schemas (match these exactly)

**hiragana files** (`hiragana.csv`, `hiragana1.csv`, `hiragana2.csv`, …) — 5 columns:

```
word, 平仮名, hiragana, english, chinese
```

- `word` — the word as written (kanji and/or hiragana). This is the key used
  as the audio filename, so it must be unique across **all** CSV files.
- `平仮名` — the full hiragana reading (this is what gets spoken for hiragana files).
- `hiragana` — the romaji reading.
- `english` — English meaning.
- `chinese` — Chinese meaning.

**katakana files** (`katakana.csv`, `katakana2.csv`, …) — 4 columns (no reading column):

```
カタカナ, katagana, english, chinese
```

- `カタカナ` — the word in katakana (this is what gets spoken for katakana files).
- `katagana` — the romaji reading.
- `english` — English meaning.
- `chinese` — Chinese meaning.

## Classification rule

- A word written in **katakana only** → katakana file (e.g. スミス, コーヒー).
- A word containing **any kanji or hiragana** → hiragana file, even if it also
  contains katakana (e.g. アメリカ人, JC企画). It needs the reading column.
- **Skip** bare suffixes/particles that are not standalone words
  (e.g. `～さん`, `～ちゃん`, `～君`).

## Deduplication rule (skip duplicates)

The `word` / `カタカナ` (first column) is the unique key. Before adding a word,
check whether it already exists in **any** CSV file — `check_duplicates.py`
dedupes across all files using a shared set, so a word may only appear once
across `hiragana.csv`, `hiragana1.csv`, `katakana.csv`, etc.

To check candidates against every file:

```bash
grep -l "^<word>," hiragana*.csv katakana*.csv
```

If it matches anywhere, **skip it** (do not add a second copy).

## 100-word split rule

Keep each **appendable** hiragana/katakana file at **100 words or fewer**
(not counting the header row). When a file would exceed 100 words:

1. Create the next numbered file (`hiragana2.csv`, then `hiragana3.csv`, …;
   `katakana2.csv`, then `katakana3.csv`, …) with the correct header row.
2. Put the overflow words into the new file.
3. Register the new file in `config.json` so all scripts pick it up:

   ```json
   {
       "files": [
           "hiragana1.csv",
           "hiragana2.csv",
           "hiragana.csv",
           "katakana.csv",
           "katakana2.csv"
       ]
   }
   ```

Notes:
- `hiragana.csv` is the large existing Lesson-1 list and is treated as a
  read-only reference for dedup — append new hiragana words to the numbered
  files (`hiragana1.csv`, `hiragana2.csv`, …), not to `hiragana.csv`.
- Always fill new appends into the highest-numbered file that still has room
  before creating the next one.

## Step-by-step procedure

1. Read the photo and list every word with its reading and meaning.
2. Classify each word as hiragana or katakana (see rule above).
3. For each word, check for duplicates across all CSVs; skip any that exist.
4. Append the remaining words to the correct file in the correct column order.
5. If a file passes 100 words, split into the next numbered file and update
   `config.json`.
6. Verify with the duplicate checker:

   ```bash
   source /Users/xiangli/.venvs/p3env/bin/activate   # env with pandas (alias: activep3)
   python check_duplicates.py
   ```

   A clean run prints `=======> Duplicate check completed.` with no
   `Duplicate found` lines.
7. (Optional) Generate audio for the new words:

   ```bash
   python download.py
   ```
