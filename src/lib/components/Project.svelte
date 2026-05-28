<script>
    import * as venues_dict from '/src/data/venues.json';

    export let project;
    export let allPublications = [];

    const venues = venues_dict.default;

    $: projectPublications = allPublications.filter(pub =>
        project.publications && project.publications.includes(pub.id)
    );

    $: dateRange = (() => {
        if (project.status === 'current') {
            return `${project.startYear} - Present`;
        } else {
            if (projectPublications.length > 0) {
                const maxYear = Math.max(...projectPublications.map(pub => pub.year));
                return `${project.startYear} - ${maxYear}`;
            }
            return `${project.startYear}`;
        }
    })();

    $: publicationCount = projectPublications.length;
    $: publicationLabel = publicationCount === 1 ? 'publication' : 'publications';
</script>

<div class="project" class:current={project.status === 'current'}>
    <div class="project-header">
        <h3>{project.title}</h3>
        <div class="date-range">{dateRange}</div>
    </div>

    <p class="description">{project.description}</p>

    {#if projectPublications.length > 0}
        <div class="related-publications">
            <div class="pub-label">{publicationCount} {publicationLabel}</div>
            <ul>
                {#each projectPublications as publication}
                    <li>
                        {#if publication.doi}
                            <a href={publication.doi}>{publication.title}</a>
                        {:else}
                            {publication.title}
                        {/if}
                        {#if publication.status !== 'in progress'}
                            {#if venues[publication.source]}
                                <span class="tag venue">{venues[publication.source]} {publication.year}</span>
                            {/if}
                            {#if publication.award}
                                <span class="tag award">
                                    {#if publication.award.toLowerCase().includes('best paper')}🏆{:else if publication.award.toLowerCase().includes('honorable mention')}🏅{/if}
                                    {publication.award}
                                </span>
                            {/if}
                        {/if}
                    </li>
                {/each}
            </ul>
        </div>
    {/if}
</div>

<style>
    .project {
        background: var(--surface);
        border: 1px solid var(--border-color);
        border-radius: 0.6em;
        padding: 1.25em 1.5em;
        margin-bottom: 0.75em;
    }

    .project.current {
        border-left: 3px solid var(--link-color);
    }

    .project-header {
        margin-bottom: 10px;
    }

    h3 {
        margin: 0 0 4px 0;
    }

    .date-range {
        color: var(--text-muted);
        font-size: 0.85em;
    }

    .description {
        margin: 0;
    }

    .related-publications {
        margin-top: 1em;
        padding: 0.75em 1em;
        background: var(--bg);
        border-radius: 0.4em;
        border: 1px solid var(--border-color);
    }

    .pub-label {
        font-size: 0.75em;
        font-weight: 600;
        letter-spacing: 0.07em;
        text-transform: uppercase;
        color: var(--text-muted);
        margin-bottom: 0.5em;
    }

    .related-publications ul {
        list-style: none;
        padding-left: 0;
        margin: 0;
    }

    .related-publications li {
        margin-bottom: 10px;
        padding-left: 1em;
        position: relative;
        font-size: 0.9em;
    }

    .related-publications li:last-child {
        margin-bottom: 0;
    }

    .related-publications li::before {
        content: "–";
        position: absolute;
        left: 0;
        color: var(--text-muted);
    }

    .tag {
        margin-left: 0.3em;
        display: inline-block;
        font-size: 0.72em;
        padding: 0.15em 0.5em;
        border-radius: 0.3em;
        border: 1px solid var(--border-color);
        color: var(--text-muted);
        white-space: nowrap;
    }

    .tag.award {
        background: var(--light-link-color);
        border-color: transparent;
        color: var(--link-color);
        font-weight: 500;
    }
</style>
