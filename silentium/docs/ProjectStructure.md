# Project Structure:

### The project's directory structure:

```bash
src/
├── apis/
│   ├── Constants.ts
│   ├── HttpClient.ts
│   ├── HttpServices.ts
├── components/
│   ├── Article.tsx
│   ├── Comments.tsx
│   ├── Header.tsx
│   ├── Navigator.tsx
│   ├── Spinner.tsx
│   ├── Story.tsx
├── constants/
│   ├── Page.ts
│   ├── Spinner.ts
│   ├── Test.ts
├── hooks/
│   ├── Paginated.ts
├── pages/
│   ├── BestStories.tsx
│   ├── Body.tsx
│   ├── Home.tsx
│   ├── NewStories.tsx
│   ├── TopStories.tsx
├── styles/
│   ├── ArticleStyle.ts
│   ├── CommentsStyle.ts
│   ├── HeaderStyle.ts
│   ├── NavigatorStyle.ts
│   ├── PageStyle.ts
│   ├── StoryStyle.ts
├── types/
│   ├── Comment.ts
│   ├── Pagination.ts
│   ├── Story.ts
├── utils/
│   ├── index.ts
tests/
App.tsx
```

### Description:

- **src/apis**: Include all http requests

- **src/components**: Include all components that used many times

- **src/constants**: Define all constants values

- **src/hooks**: Define custom hooks for the app

- **src/pages**: Or calling screens. Displayed on the main screen

- **src/styles**: Defined all styles for components and pages

- **src/types**: Define all types of the project

- **src/utils**: Common functions

- **tests**: All tests of the project are written here
