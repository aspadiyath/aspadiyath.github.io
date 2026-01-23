<script>
    export let project;
    export let allPublications = [];

    // Get publications associated with this project
    $: projectPublications = allPublications.filter(pub =>
        project.publications && project.publications.includes(pub.id)
    );

    // Calculate the date range
    $: dateRange = (() => {
        if (project.status === 'current') {
            return `${project.startYear} - Present`;
        } else {
            // For past projects, find the year of the last publication
            if (projectPublications.length > 0) {
                const maxYear = Math.max(...projectPublications.map(pub => pub.year));
                return `${project.startYear} - ${maxYear}`;
            }
            return `${project.startYear}`;
        }
    })();

    // Publication count with proper pluralization
    $: publicationCount = projectPublications.length;
    $: publicationLabel = publicationCount === 1 ? 'publication' : 'publications';
</script>

<div class="project">
    <div class="project-header">
        <h3>{project.title}</h3>
    </div>
    <div class="date-range">{dateRange}</div>

    <p class="description">{project.description}</p>

    {#if projectPublications.length > 0}
        <div class="related-publications">
            <h4>{publicationCount} {publicationLabel}</h4>
            <ul>
                {#each projectPublications as publication}
                    <li>
                        {#if publication.doi}
                            <a href={publication.doi}>{publication.title}</a>
                        {:else}
                            {publication.title}
                        {/if}
                    </li>
                {/each}
            </ul>
        </div>
    {/if}
</div>

<style>
    .project {
        margin-bottom: 40px;
        padding-bottom: 30px;
        border-bottom: 2px solid #eee;
    }

    .project-header {
        margin-bottom: 4px;
    }

    h3 {
        margin: 0;
        font-size: 1.3em;
    }

    .date-range {
        color: #666;
        font-size: 0.9em;
        margin-bottom: 12px;
    }

    .description {
        margin: 12px 0;
        line-height: 1.6;
    }

    .related-publications {
        margin-top: 20px;
        padding-top: 15px;
        border-top: 1px solid #eee;
    }

    .related-publications h4 {
        margin-bottom: 15px;
        font-size: 1em;
        color: #666;
    }

    .related-publications ul {
        list-style: none;
        padding-left: 0;
    }

    .related-publications li {
        margin-bottom: 8px;
        padding-left: 20px;
        position: relative;
    }

    .related-publications li::before {
        content: "•";
        position: absolute;
        left: 0;
    }

    .related-publications a {
        color: var(--link-color);
        text-decoration: none;
    }

    .related-publications a:hover {
        text-decoration: underline;
    }
</style>
