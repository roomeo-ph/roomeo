# Roomeo
Roomeo is an application designed to simplify the process of finding safe, verified student housing and compatible roommates for university students in the Philippines. Starting with De La Salle University (DLSU), Roomeo aims to become a trusted platform where students can discover housing options, connect with potential roommates, and form housing groups with greater convenience and security.

## Proposed Features
- University email (.edu.ph) student verification
- Verified landlord and property listings
- Swipe-based roommate matching system
- Group rental applications
- Landlord dashboard with listing management, applicant review, and analytics
- Messaging functionality for student-landlord communication

## Tech Stack
| Layer | Choice |
|---|---|
| Web Framework | ReactJS |
| Language | TypeScript |
| Styling | TailwindCSS |
| Backend Framework | Hono |
| Data fetching | Tanstack Query and Hono RPC |
| Database | PostgreSQL |
| Backend Provider | Supabase |
| Auth | Better Auth |
| ORM | Drizzle |

## Getting Started

To install dependencies:

```bash
bun install
```

To run, run these two commands in separate terminals:

### Backend API
```bash
bun run dev:api
```

### Web-based frontend
```bash
bun run dev:web
```

This project was created using `bun init` in bun v1.4.0.