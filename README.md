# Material UI React templates

This repo contains a collection of Material UI React templates taken from the official Material UI website and modified
so they work (for me). Some didn't work out of the box, some threw errors but worked, and some I modified slightly to
include additional components like a landing page.

## Upfront disclaimer

I am not a frontend developer or UI designer.

Like all great developers all of this stuff "works on my machine". If it doesn't work on yours open an issue and I'll
see if I can help eventually.

If you want to get any of these templates working usually you just need to go into the template's directory and do this:

```bash
pnpm install
pnpm dev
```

If you're unlucky and it tells you `next` isn't found you might have to do `pnpm install next`. But maybe not, this is
JavaScript land after all. Everyone's system is unique and special.

## Templates

### Blog

[Material UI Blog](material-ui-blog/README.md)

#### Origin

This is the [material-ui-nextjs-ts](https://github.com/mui/material-ui/tree/master/examples/material-ui-nextjs-ts)
example combined with
the [blog page](https://github.com/mui/material-ui/tree/v5.15.14/docs/data/material/getting-started/templates/blog)
component.

#### Modifications

I've moved the blog posts into a separate directory and added links and buttons from the main page to the about page and
the blog page.

#### Fixes

I added the `markdown-to-jsx` package and updated teh next.config.mjs file to properly include the Markdown files.

### Landing page

[Material UI Landing Page](material-ui-landing-page/README.md)

#### Origin

This is the [material-ui-nextjs-ts](https://github.com/mui/material-ui/tree/master/examples/material-ui-nextjs-ts)
example combined with
the [landing page](https://github.com/mui/material-ui/tree/v5.15.14/docs/data/material/getting-started/templates/landing-page)
component.

#### Modifications

I've added a button and a link for both the about page and the landing page from the main page. That's it.

#### Fixes

I've moved the static images into the `public/static` directory and updated the paths for them and installed the Inter
font properly.

I've also fixed these issues:

```
Warning: Invalid ARIA attribute `ariaLabel`. Did you mean `aria-label`?
```

```
Warning: Invalid DOM property `autocomplete`. Did you mean `autoComplete`?
```

## Resources

- [Material UI](https://mui.com/)
- [Material UI templates](https://mui.com/material-ui/getting-started/templates/)
