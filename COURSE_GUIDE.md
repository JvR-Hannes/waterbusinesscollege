# Water Business College Project and Course Guide

This guide describes the website structure and the two ways courses are currently
added: through the existing catalog pages and through the newer admin course
workflow.

## Project overview

The site is built with Next.js App Router, React, and TypeScript. Application
pages and API routes live under `src/app`; reusable interface components and
course data live under `src/components` and `src`. Static images and PDFs are
served from `public`, using URLs that start at the site root (for example,
`/images/courses/introToAlgebra.png`).

The home page composes reusable sections such as the hero, course cards, and
qualification information. The shared layout adds the navigation bar, footer,
and chatbot to each page.

## Existing catalog: add a course with pages and data

Most of the established catalog is built from TypeScript data and page files.
For this flow, adding a course usually means adding its image and catalog entry,
then creating or updating a page for its details.

### 1. Add the course image or brochure

Put course card images in `public/images/courses/`. Add PDFs used by detail
pages to `public/pdfs/`. Reference these files by their public URL, not by an
import or a filesystem path:

```tsx
imageUrl="/images/courses/new-course.png"
```

Use an accurate, descriptive image alt text; the course-card component uses the
course title for it.

### 2. Add the course to the appropriate listing

Choose the listing that matches the course:

- Foundation courses: `src/app/courses/foundation-courses/page.tsx`
- Short courses: `src/app/courses/short-courses/page.tsx`
- DIY courses: `src/app/courses/diy-courses/page.tsx`
- Occupational qualifications and other high-level categories: update the
  relevant category page and, when appropriate, `src/coursesData.tsx`.

These category pages currently define arrays of course information, including
the title, description, image URL, and detail-page `href`. They render each
entry with the shared `CourseCard` component. Add a new object to the relevant
array and point its `href` to the detail page route. Keep descriptions in the
existing JSX style so paragraphs, lists, and emphasis render correctly.

The `/courses` page is a separate full catalog. Its entries come from
`src/fullCourseData.tsx` (`fullCourses`), grouped by the `category` field. If
the course should appear in that grid, add a `Course` object there as well.
The type supports a title, image, description, optional price and purchase
link, category, and application flags. Purchase links for the existing portal
are built with `buildPortalPurchaseLink(productId)`. Confirm the product ID
and the correct application path before adding or changing purchase behavior.

### 3. Create the detail page

The App Router maps folders to URLs. For example,
`src/app/courses/modules/foundation-intro-algebra/page.tsx` serves
`/courses/modules/foundation-intro-algebra`. Create a new folder and
`page.tsx` for a new course-specific route, then set the matching URL in the
listing entry's `href`.

Detail pages can follow the existing module pattern: show a heading, embed a
PDF from `public/pdfs/` when a brochure is available, and provide a clear
call-to-action. Some qualification pages route the button to the qualification
application, while other courses link to the catalog or an external purchase
page. Match the intended enrollment process rather than copying a button
destination blindly.

### 4. Verify the course flow

Check the category page and the full catalog, if applicable. Follow the card
link to the detail route, verify that images and PDFs load, and test the
purchase or application call-to-action. Run the production build to catch
TypeScript and Next.js route errors:

```bash
npm run build
```

## Course catalog components and data

- `src/components/CourseCard.tsx` is the expandable card used on category
  listings. It accepts a title, JSX description, image URL, optional page
  destination, and button label. It also supports a temporarily unavailable
  state.
- `src/components/FullCourseCard.tsx` is a simpler image, price, and purchase
  card component.
- `src/coursesData.tsx` holds high-level course-category cards.
- `src/fullCourseData.tsx` holds individual products for the `/courses` grid.
- Category page arrays provide more detailed descriptions and link into course
  information pages.

When a course needs to appear in multiple places, update each relevant catalog
source so the category listing and full catalog stay consistent.

## Newer admin-managed course workflow

There is also a newer, separate course-management flow:

1. The admin form at `src/app/admin/courses/new/page.tsx` collects the title,
   slug, description, price/free status, publication status, and optional
   legacy links.
2. It sends the course to the admin API at `/api/admin/courses`.
3. Course records are stored by `src/lib/db.ts` in `admin-data.json` at the
   project working directory. The data model is defined in `src/lib/models.ts`.
4. Published records are returned by `/api/public-courses` and displayed at
   `/new-courses/[slug]`. The detail route loads an individual published
   course from `/api/public-courses/[slug]`.

This workflow is distinct from the existing statically defined course pages
and `fullCourses` catalog: creating an admin-managed course does not by itself
add it to those legacy category listings or the `/courses` grid. The current
database helper uses a local JSON file, so account for the deployment
environment's writable and persistent storage before relying on it for
production course data.

## Local development

Install dependencies and start the Next.js development server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to view the site. Changes to files in `src/app`
and its components are picked up by the development server.
