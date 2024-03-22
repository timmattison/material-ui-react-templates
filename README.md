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

### Landing page

- [Material UI Landing Page](material-ui-landing-page/README.md)

This is the [material-ui-nextjs-ts](https://github.com/mui/material-ui/tree/master/examples/material-ui-nextjs-ts)
example combined with
the [landing page](https://github.com/mui/material-ui/tree/v5.15.14/docs/data/material/getting-started/templates/landing-page)
component.

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
