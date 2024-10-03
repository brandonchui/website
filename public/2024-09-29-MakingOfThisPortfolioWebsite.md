# The Making of This Portfolio Website

I always thought it would be an excellent experience to learn new frameworks by building projects—big or small—and so this is how my website came to be. The web development space is attractive because it seems like innovations with new technology are always coming—something new and exciting is always coming.

Meanwhile, coming from a C++ background, I still use the Qt frameworks from the 90s for user interfaces and need to go through 500 lines of code for a button to look half decent (I still love using Qt, though!).

I needed to research web development, but I had some time recently. I spent the summer of 2024 traveling around Asia with just my Macbook and suitcase, which gave me adequate time to read up on various technologies and best practices.

## Tech used
**React**: The use of HTML inside the Typescript function was a bit odd at first, but then everything started to click. Eventually, I saw the use cases for the various hooks and props and was very impressed with what the framework could do.

**Remix**: I have tried using Nextjs before, and it was fine, but I really just wanted to try Remix for the fun of it. I don't see any major differences for my simple website, though the remix router in v2 is confusing at times. Everything seems to break even following the documentation for routing.

**Netlify**: The easiest hosting solution that works seamlessly with Remix. You must create the starter template Remix project when you `npx create-remix@latest` to get started.

**TailwindCSS**: Using this library to style components is intuitive. It keeps my folder clean of many .css files.

**Typescript**: It made more sense to gravitate towards another strongly typed language, considering my use of C++ in the past, though it still feels wrong to put types at the end in Typescript.


# Creating a blog-serving website
At the moment, the website only has one purpose—to show Markdown files to the client. I am using Remix features, mainly the `loader()` functions, which returns a promise.

I have one `.tsx` file per website page using Remix's routes. The `loader()` function is called in pages that need to load information, such as JSON data, into a component. For example, my page, where every blog entry is displayed, uses the `loader()` function as I load JSON data into that page. The Contact page is just a basic react component, so there is no need for dynamic data.

Each of the `loader()` functions reads from a file path where the Markdown files are and turns them into JSON objects. Specifically, I only care about the various metadata of the files, such as title, date, and content. In my React components, I use the `useLoaderData()` function to get that JSON object and render all that content into the page. Everything is decoupled here, which is quite nice.

This pattern is repeated throughout the website wherever I need that dynamic data; otherwise, a simple React component will be enough for that page.


## Limitations
Markdown is an excellent option for a personal website. You only have to push files into your GitHub repo, and Netlify will automatically update your website. One push with an additional markdown blog entry will make everything work.

In my previous project, I managed to get Payload CMS to work alongside Nextjs and React on my other attempt at a personal website. However, I needed a PostgreSQL server running, and I couldn't figure out the details of how to deploy the website and database server into a seamless package yet.
![Description of the image](/OldWebsite1.png)
In future updates, I hope to use a backend, such as Java Spring, so that the website can talk to a database and not rely as much on Markdown files.




