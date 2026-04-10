<script>
    import Emoji from "$lib/components/Emoji.svelte";
</script>

<span>
    <a href="mailto:aadarsh@umich.edu">
        <Emoji symbol="📧"/>
    </a><span class="dot">&sdot;</span>
    <a href="https://ideallab.substack.com/">
        <Emoji symbol="📝"/>
    </a><span class="dot">&sdot;</span>
    <a href="https://scholar.google.com/citations?user=uZf5ZssAAAAJ&hl=en">
        <Emoji symbol="🎓"/>
    </a>
</span>

<style>
    .dot {
        display: inline-block;
        margin-inline-start: 0.25em;
        margin-inline-end: 0.25em;
    }
</style>