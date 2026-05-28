<script>
    import headshot from '/images/headshot.png';
    import Social from "$lib/components/Social.svelte";
    import { page } from '$app/stores';
</script>

<section>
    <a href="/"><img src="{headshot}" alt="Headshot of Aadarsh Padiyath"/></a>
    <h1>Aadarsh Padiyath</h1>
    <div class="metadata">
        <a href="https://www.mypronouns.org/he-him">he/him/his</a><br/>
        <a href="https://rackham.umich.edu/navigating-your-degree/candidacy-requirements/">Ph.D. Candidate</a><br/>
        <a href="https://si.umich.edu">The School of Information</a><br/>
        <a href="https://umich.edu">University of Michigan, Ann Arbor</a>
    </div>
    <Social/>
</section>
<hr/>
<nav>
    <a href="/" class:active={$page.url.pathname === '/'}>Research</a>
    <a href="/publications" class:active={$page.url.pathname.startsWith('/publications')}>Publications</a>
    <a href="/tools" class:active={$page.url.pathname.startsWith('/tools')}>Tools</a>
    <a href="/writing" class:active={$page.url.pathname.startsWith('/writing')}>Writing</a>
    <a href="/Aadarsh_Padiyath_CV.pdf">CV</a>
</nav>

<style>
    img {
        width: calc(100% - 1em);
        padding: 0;
        border-radius: 0.5em;
        display: block;
        margin-right: 1em;
        margin-bottom: 1em;
        max-width: 10em;
    }

    nav, .metadata {
        line-height: 1.7;
        font-size: var(--small-font-size);
    }

    nav {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        row-gap: calc(var(--padding) / 2);
    }

    :global(nav > *) {
        padding-left: var(--padding);
        padding-right: var(--padding);
        border-radius: var(--roundedness);
    }

    :global(nav > a:hover) {
        background-color: var(--surface);
        text-decoration: none;
    }

    :global(nav > a.active) {
        font-weight: 500;
        text-decoration: underline;
        text-underline-offset: 2px;
    }
</style>
