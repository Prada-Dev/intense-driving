# Copilot Instructions for Intense Drive Platform

**IMPORTANT:** Under no circumstances should you change the design or styles from what is already present in the codebase. All UI, layout, and styling must remain exactly as implemented unless explicitly instructed otherwise by the user.

## Project Overview

- **Type:** Vite + React + TypeScript web app for a UK driving school
- **UI:** shadcn-ui, Tailwind CSS, Radix UI primitives
- **State/Forms:** React state, react-hook-form, custom hooks
- **Routing:** React Router
- **External Services:** Supabase (see `src/integrations/supabase/client.ts`)
- **Build/Dev:** Use `npm run dev` for local dev, `npm run build` for production, `npm run preview` for static preview

## Architecture & Patterns

- **Pages:** All main routes in `src/pages/` (e.g. `Courses.tsx`, `StudentPortal.tsx`, `FAQ.tsx`)
- **Components:** Reusable UI in `src/components/` and `src/components/ui/` (e.g. `BookingForm`, `PricingCard`, custom wrappers for Radix primitives)
- **Assets:** Images in `src/assets/`
- **Integrations:** Supabase client in `src/integrations/supabase/` (use `supabase` export for DB/API)
- **Utilities:** Use `cn` from `src/lib/utils.ts` for class merging
- **Styling:** Tailwind config in `tailwind.config.ts` (custom colors, dark mode via class)
- **Forms:** Use shadcn-ui form primitives and react-hook-form for validation
- **Toasts:** Use `use-toast` hook and `ui/toast.tsx` for notifications (limit: 1 toast at a time)
- **Navigation:** Main nav in `Navigation.tsx`, sticky header, mobile via Sheet
- **Footer:** Social/contact info in `Footer.tsx`

## Conventions & Workflows

- **Imports:** Use `@/` alias for `src/` (see `vite.config.ts`)
- **Linting:** Run `npm run lint` (see `eslint.config.js`)
- **Component Variants:** Use `class-variance-authority` for UI variants (see `ui/button.tsx`, `ui/toast.tsx`)
- **Animations:** Use Tailwind and `tailwindcss-animate` for transitions
- **Testing:** No test files found; follow component-driven development and keep logic in hooks/components
- **Deployment:** Use Lovable platform for publish/share (see README)

## Examples

- **Supabase usage:** `import { supabase } from "@/integrations/supabase/client"`
- **Class merging:** `className={cn("bg-white", customClass)}`
- **Button variants:** `<Button variant="destructive" size="sm">Delete</Button>`
- **Toast usage:** `const { toast } = useToast(); toast({ title: "Saved!" })`

## Key Files

- `src/pages/` — main routes
- `src/components/` — app-level components
- `src/components/ui/` — atomic UI primitives
- `src/integrations/supabase/` — DB/API client
- `src/hooks/` — custom hooks
- `src/lib/utils.ts` — utility functions
- `vite.config.ts` — build config, alias setup
- `tailwind.config.ts` — theme and styling
- `eslint.config.js` — lint rules

## Project-Specific Guidance

- Prefer shadcn-ui and Radix primitives for new UI
- Use Tailwind for all styling; avoid CSS modules
- Use `@/` alias for imports from `src/`
- Keep business logic in hooks/components, not pages
- Use Lovable for deployment and domain setup

---

_If any section is unclear or missing, please specify what needs improvement or what additional context is needed._
