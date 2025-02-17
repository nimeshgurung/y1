# blueprint-component-library

## Project Description

The blueprint-component-library is a component library designed to provide reusable and customizable UI components for the Blueprint App. It includes a variety of components, designs, icons, and themes.

## Running the Project

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://devcloud.ubs.net/ubs/ib/engineering-productivity/agile-tooling-coe/blueprint/blueprint/blueprint-component-library.git
   ```

2. Navigate to the project directory:

   ```bash
   cd blueprint-component-library
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run storybook
   ```

5. Open your browser and navigate to `http://localhost:6006` to view the project.

## Folder Structure

The project has the following folder structure:

```
src/
├── components/
│   ├── AppLogo.stories.tsx
│   ├── AppLogo.tsx
│   ├── AttributeChip/
│   │   ├── AttributeChip.stories.tsx
│   │   ├── AttributeChip.tsx
│   ├── Card/
│   │   ├── Card.stories.tsx
│   │   ├── Card.tsx
│   ├── DateChip/
│   │   ├── DateChip.stories.tsx
│   │   ├── DateChip.tsx
│   │   ├── index.ts
│   ├── Initiative/
│   │   ├── InitiativeCardLayout.tsx
│   │   ├── InitiativeCardPage.tsx
│   │   ├── InitiativeSetup.tsx
│   │   ├── InitiativeSetupLayout.tsx
│   ├── Navigation/
│   │   ├── PrimaryNavigation.stories.tsx
│   │   ├── PrimaryNavigation.tsx
│   │   ├── PrimaryNavigationItem.stories.tsx
│   │   ├── PrimaryNavigationItem.tsx
│   │   ├── SecondaryNavigation.stories.tsx
│   │   ├── SecondaryNavigation.tsx
│   │   ├── SecondaryNavigationItem.stories.tsx
│   │   ├── SecondaryNavigationItem.tsx
│   ├── ProgressBar/
│   │   ├── ProgressBar.stories.tsx
│   │   ├── ProgressBar.tsx
│   ├── RAGStatusChip/
│   │   ├── index.ts
│   │   ├── RAGStatusChip.stories.tsx
│   │   ├── RAGStatusChip.tsx
│   ├── StatusChip/
│   │   ├── StatusChip.stories.tsx
│   │   ├── StatusChip.tsx
├── designs/
│   ├── colors/
│   ├── navigation/
├── icons/
│   ├── Logomark.svg
├── stories/
│   ├── Colors.stories.tsx
│   ├── Typography.stories.tsx
│   ├── pages/
│   │   ├── InitiativeCardPage.stories.tsx
│   │   ├── InitiativePage.stories.tsx
├── theme/
│   ├── theme.ts
```