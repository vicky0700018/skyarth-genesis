<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application rules
- Keep the platform TanStack routing/bootstrap and use React, CSS/Tailwind with no added libraries for application features; platform infrastructure is fixed.
- Store all demo content and demo login state in a shared React context at the root; public and admin pages must reflect the same current-session state without persistence.
- Use a reusable native React Button component and semantic CSS tokens for controls; no third-party UI libraries.
- Store downloaded photography through lovable-assets pointers and reference resolved URLs from one image catalogue; no external image hotlinks.
- Demo admin protection is presentation-only, never a security boundary or a real role check.
