<script>
    export let tool;
</script>

<div class="tool">
    <div class="tool-header">
        <h3><a href={tool.link}>{tool.name}</a></h3>
    </div>
    <div class="tool-meta">{tool.type} • {tool.year}</div>

    <p class="description">{tool.description}</p>
</div>

<style>
    .tool {
        margin-bottom: 40px;
        padding-bottom: 30px;
        border-bottom: 2px solid #eee;
    }

    .tool-header {
        margin-bottom: 4px;
    }

    h3 {
        margin: 0;
        font-size: 1.3em;
    }

    .tool-header h3 a {
        color: var(--link-color) !important;
        text-decoration: none;
    }

    .tool-header h3 a:hover {
        text-decoration: underline;
    }

    .tool-meta {
        color: #666;
        font-size: 0.9em;
        margin-bottom: 12px;
    }

    .description {
        margin: 12px 0;
        line-height: 1.6;
    }
</style>
