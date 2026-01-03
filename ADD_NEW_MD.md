Steps to Add a New Markdown File

  1. Create the Markdown File

  Create your markdown file in the appropriate category folder under src/data/. For example:
  + Code articles: src/data/code/your-article.md
  + Books: src/data/book/your-book.md
  + Japanese: src/data/japanese/your-content.md
  + English: src/data/english/your-content.md
  + French: src/data/french/your-content.md
  + Chinese: src/data/chinese/your-content.md

  2. Format Your Markdown File

  Your markdown file must have frontmatter at the top with a path field:

  ---
  path: '/category/your-page-slug'
  ---

  # Your Title Here

  Your content goes here...

  Example (see src/data/code/kafka.md:1-3):
  ---
  path: '/code/kafka'
  ---

  # Kafka vs RabbitMQ
  ...

  3. Register in title.json

  Add an entry to the appropriate title.json file in the category folder:

  Location: src/data/{category}/title.json

  Format (see src/data/code/title.json:1-55):
  {

    "type": "code",
    "children": [
      {
        "title": "Your Article Title",
        "page": "code/your-page-slug",
        "creationDate": "YYYY-MM-DD"
      }
    ]

  }

  4. How It Works

  + page in title.json maps to the file path: code/kafka → src/data/code/kafka.md
  + path in markdown frontmatter defines the URL route: /code/kafka
  + The system uses Vite's import.meta.glob to auto-load all markdown files (see src/composables/useArticles.ts:15)
  + Articles are displayed via the PageLink component with creation date sorting
