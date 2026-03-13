# S-World Platform — Phase 1

This is a clean Phase 1 foundation for the rebuilt S-World platform.

## Included in Phase 1
- Clean Next.js 16 + TypeScript + App Router setup
- Homepage
- Subjects list page
- Dynamic subject detail page
- Shared layout and global styling
- Typed routes enabled in `next.config.ts`

## Routes included
- `/`
- `/subjects`
- `/subjects/[subjectId]`

## Notes
This phase uses mock in-memory subject data so the app can build cleanly before adding database logic.

## Next phases
- Add `lib/db.ts`
- Add `types/database.ts`
- Add API routes
- Add topics and questions
- Add admin / author / reviewer workflows later