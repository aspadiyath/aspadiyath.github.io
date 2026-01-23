<script>
    import Emoji from "$lib/components/Emoji.svelte";
</script>

<span>
    <a href="mailto:aadarsh@umich.edu">
        <Emoji symbol="📧"/>
    </a><span class="dot">&sdot;</span>
    <a href="https://medium.com/@the_ideal_1">
        <Emoji symbol="📝"/>
    </a><span class="dot">&sdot;</span>
    <a href="https://twitter.com/@the_ideal_1">
        <Emoji symbol="🐥"/>
    </a>
</span>

<style>
    .dot {
        display: inline-block;
        margin-inline-start: 0.25em;
        margin-inline-end: 0.25em;
    }
</style>