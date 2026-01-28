<script>
    import Title from "$lib/components/Title.svelte";
    import ToolItem from "$lib/components/ToolItem.svelte";
    import * as tools_dict from '/src/data/tools.json';

    let tools = [];
    tools = tools_dict.default;
</script>

<Title text="Tools" />

<h1>
    These are validated tools and interventions developed through my research.
</h1>

<p>
    I enjoy developing tools and interventions that support computer science education research.
</p>

<hr />

<section id="tools">
    {#each tools as tool}
        <ToolItem {tool} />
    {/each}
</section>
