# Progress-indicator

This is a progress indicator I use in almost every vue/nuxt project of mine.

### Prerequisites:
- This repo is only useful for vue/nuxt projects. ~~I just wrote above are u blind~~
- Install [NProgress](https://www.npmjs.com/package/nprogress) using `npm i nprogress`.

### Issues:
If you have any issues, don't bombard my dms on discord, I'm not using it.

Just create a new issue [right here](https://github.com/SilentJungle399/Progress-indicator/issues) like a gentleman.

## Vue:
Copy the contents from `progress.js` to your `main.js`, you'll probably want to remove the `import Vue from 'vue';` line, and improvise a lil' bit.
If you can't improvise, you should be doing basics.

Put the `nprogress.css` and `loadIndicator.css` in the public css directory and link them to `index.html`.

## Nuxt:
1. Copy the `progress.js` to your `plugins` folder.
2. Copy the `nprogress.css` and `loadIndicator.css` to your `static` folder.
3. In your `nuxt.config.js` file, add this ~~Ofc not the `export default {}` that was just for reference~~
```javascript
export default {
    head: {
        link: [
            { rel: 'stylesheet', type: 'text/css', href: '/nprogress.css' },
            { rel: 'stylesheet', type: 'text/css', href: '/loadingIndic.css' }
        ]
    },

    plugins: [
        {src: "~/plugins/progress.js"}
    ]
}
```

### Usage:
```javascript
// Start a minimal progress bar to indicate something is happening
this.$load.start()
// or
this.$load.start('load')

// Start a full window load with a special loading indicator in the center of the page
// Note that this is to be used when your app is rendering the UI and the UI looks a bit broken while it happens
// This can be used as an overlay to hide the broken UI while its loading
this.$load.start('page')

// Ends the loading indicator
// Cus obv since you started it, so you need to end the indicator when whatever was loading has been loaded.
this.$load.done()
```

## Note:
You don't necessarily have to use the loading indicator I added, I used it because I liked it the most, there are more indicators available at [this website](https://tobiasahlin.com/spinkit/), you can modify the code to adapt to whichever indicator you liked the most, **__only if you know what you're doing__**. Don't shout at me in issues section if you break your code.
