<script>
    import Title from "$lib/components/Title.svelte";
    import ToolItem from "$lib/components/ToolItem.svelte";
    import * as tools_dict from '/src/data/tools.json';

    let tools = [];
    tools = tools_dict.default;
</script>

<Title text="Tools" />

<h1>
    These are tools and interventions developed through my research.
</h1>

<hr />

<section id="tools">
    {#each tools as tool}
        <ToolItem {tool} />
    {/each}
</section>
