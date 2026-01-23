<script>
    import Title from "$lib/components/Title.svelte";
    import Project from "$lib/components/Project.svelte";
    import * as projects_dict from '/src/data/projects.json';
    import * as pub_dict from '/src/data/pubs.json';

    let projects = projects_dict.default;
    let publications = pub_dict.default;

    // Sort projects: current first, then by most recent publication year (descending)
    let sortedProjects = [...projects].sort((a, b) => {
        // First priority: current projects before past projects
        if (a.status === 'current' && b.status !== 'current') return -1;
        if (a.status !== 'current' && b.status === 'current') return 1;

        // Second priority: sort by most recent publication year
        const aPubs = publications.filter(pub => a.publications && a.publications.includes(pub.id));
        const bPubs = publications.filter(pub => b.publications && b.publications.includes(pub.id));

        const aMaxYear = aPubs.length > 0 ? Math.max(...aPubs.map(p => p.year)) : a.startYear;
        const bMaxYear = bPubs.length > 0 ? Math.max(...bPubs.map(p => p.year)) : b.startYear;

        return bMaxYear - aMaxYear;
    });
</script>

<Title text="Research"/>

<h1>
    I study how computing professionals develop the power and agency to create
    positive change, from their classroom experiences to professional practice.
</h1>

<p>
    Advised by my amazing collaborators, Barbara Ericson and Mark Guzdial, I currently
    publish work in Computing Education and Human-Computer Interaction communities.
</p>

<hr />

<section id="projects">
    <h2>Research Projects</h2>
    {#each sortedProjects as project}
        <Project {project} allPublications={publications} />
    {/each}
</section>


<style>
    #projects {
        margin-top: 30px;
    }

    #projects h2 {
        margin-bottom: 25px;
        border-bottom: 2px solid #eee;
    }
</style>