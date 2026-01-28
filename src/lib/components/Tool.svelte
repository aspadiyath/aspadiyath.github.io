<script>
    export let name;
    export let description;
    export let type = "";
    export let year = "";
</script>

<div class="tool-header">
    <h1>{name}</h1>
    <div class="tool-meta">
        {#if type}
            <span class="tool-type">{type}</span>
        {/if}
        {#if year}
            <span class="tool-year">{year}</span>
        {/if}
    </div>
</div>

{#if description}
    <p class="tool-description">{description}</p>
{/if}

<hr />

<slot></slot>

<style>
    .tool-header {
        margin-bottom: 1.5em;
    }

    .tool-header h1 {
        margin-bottom: 0.5em;
    }

    .tool-meta {
        display: flex;
        gap: 1em;
        flex-wrap: wrap;
        font-size: var(--small-font-size);
        color: #666;
    }

    .tool-type {
        font-style: italic;
    }

    .tool-description {
        font-size: 1.1em;
        line-height: 1.6;
        margin-bottom: 1.5em;
    }
</style>
