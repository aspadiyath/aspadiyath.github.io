<script>
    import Title from "$lib/components/Title.svelte";
    import Tool from "$lib/components/Tool.svelte";
</script>

<Title text="GenAI Contract" />

<Tool id="genai-contract">

<section id="related-paper">
    <h2>Related Paper</h2>
    <ul>
        <li>
            <a href="/papers/genai_contracts.pdf">Self-Regulated Personal Contracts as a Harm Reduction Approach to Generative AI in Undergraduate Programming Education</a>
            — ITiCSE 2026 (preprint)
        </li>
    </ul>
</section>

<section id="overview">
    <h2>Overview</h2>
    <p>
        The GenAI Contract is a structured reflection tool designed to scaffold students' decision-making about when and how to use Generative AI while learning programming. Rather than prohibiting or mandating use, it helps students articulate their own learning goals and create personalized guidelines aligned with those goals.
    </p>
    <p>
        The contract is <strong>non-binding and graded for completion only</strong>. The goal is intentionality, not policing behavior. In our implementation with N=217 students, 58% reported the intervention changed how they thought about GenAI use.
    </p>
</section>

<section id="theory">
    <h2>Theoretical Grounding</h2>
    <p>The intervention draws from three frameworks:</p>
    <ul>
        <li><strong>Self-Regulated Learning (SRL)</strong> — Zimmerman's forethought–performance–self-reflection cycle structures the three reflection checkpoints across the semester.</li>
        <li><strong>Harm Reduction Philosophy</strong> — Acknowledges that students will use GenAI regardless of rules, and focuses on supporting better decision-making rather than enforcement.</li>
        <li><strong>Implementation Intentions</strong> — The "if-then" guideline format translates students' goals into concrete, situationally-anchored action plans.</li>
    </ul>
</section>

<section id="materials">
    <h2>Materials</h2>
    <p>The intervention consists of four reflection prompts distributed across eleven weeks:</p>

    <table class="materials-table">
        <thead>
            <tr>
                <th>#</th>
                <th>Component</th>
                <th>Timing</th>
                <th>Description</th>
                <th>Link</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Contract Template — Steps 1 &amp; 2</td>
                <td>Week 2</td>
                <td>Students articulate learning goals (Step 1) and create personal GenAI usage guidelines (Step 2).</td>
                <td><a href="https://docs.google.com/document/d/1yEyr4tNz69HRgy55hUAgE5rBMP1A2PLEC82vzGa-1zY/copy">Make a copy</a></td>
            </tr>
            <tr>
                <td>2</td>
                <td>Student Examples</td>
                <td>Week 2 (optional)</td>
                <td>Sample goals and guidelines from our Fall 2025 implementation, organized by student goal type.</td>
                <td><a href="https://docs.google.com/spreadsheets/d/185iut_rWdwPHh_xIvdQAsmqBVhZIw9swI1DuYfsb9KE/copy">Make a copy</a></td>
            </tr>
            <tr>
                <td>3</td>
                <td>Contract Template — Step 3</td>
                <td>Week 5 (post-Midterm 1)</td>
                <td>Students describe actual usage, evaluate goal alignment, and revise guidelines.</td>
                <td><a href="https://docs.google.com/document/d/1TiYQ0NTanFO4uYl5yUcaCN0iqg6I83f_fgc07c7c2q0/copy">Make a copy</a></td>
            </tr>
            <tr>
                <td>4</td>
                <td>Contract Template — Step 4</td>
                <td>Week 11 (post-Midterm 2)</td>
                <td>Final reflection on the semester, including what they learned about themselves as learners.</td>
                <td><a href="https://docs.google.com/document/d/16_2hDylo8uewejp5w14J11w9098NEH-mADrunDjmKQ0/copy">Make a copy</a></td>
            </tr>
        </tbody>
    </table>

    <p class="materials-note">
        Steps 1 and 2 are distributed as a copyable Google Doc. Steps 3 and 4 are distributed as text for students to paste into their existing document, so the contract accumulates as a single document across the semester.
    </p>
</section>

<section id="homework-header">
    <h2>Homework Header Integration</h2>
    <p>
        In our Winter 2026 implementation, we added the following prompt to the top of every homework file to keep the contract visible between reflection checkpoints:
    </p>
    <div class="code-block">
        <code># Did your use of GenAI on this assignment align with your goals and guidelines? (yes / mostly / partially / not really / I intentionally adjusted, and why):</code>
    </div>
    <p>
        This was introduced based on Fall 2025 student feedback that the contract was "out of sight, out of mind" between checkpoints.
    </p>
</section>

<section id="grading">
    <h2>Grading</h2>
    <p>
        Each reflection was worth a small number of completion points (approximately 1.5% of the final grade total). We graded for <strong>completion, never for content</strong>. Students should feel free to write honestly without fear of judgment.
    </p>
</section>

<section id="context">
    <h2>Course Context</h2>
    <p>
        This intervention was implemented in an intermediate Python programming course ("Data-Oriented Programming") at the University of Michigan. The course enrolled N=217 students across approximately 60% Information Science majors, 10% Computer Science majors, and 30% from other programs.
    </p>
    <p>
        The intervention sits <strong>on top of the course's existing structure</strong> — it does not require redesigning assignments. GenAI use was permitted; students were asked to cite what they used and how it helped. Two proctored midterm exams assessed programming skills without GenAI access, creating a natural tension the contract helps students navigate.
    </p>
</section>

<section id="adaptation">
    <h2>Adapting This Intervention</h2>
    <p>
        This intervention is student-centered and not tied to specific course content, making it adaptable to any programming course regardless of language, level, or student population. Key adaptation considerations:
    </p>
    <ul>
        <li>Align reflection checkpoint timing with your assessments (e.g., exams, major projects)</li>
        <li>Adjust the grading weight to incentivize participation without creating undue pressure</li>
        <li>Consider adding the homework header or other lightweight reminders between checkpoints to address the "out of sight, out of mind" problem</li>
        <li>Stress to students that non-use is a valid outcome -- the contract is not a requirement to use GenAI</li>
    </ul>
</section>

<section id="citation">
    <h2>How to Cite</h2>
    <div class="citation-box">
        Aadarsh Padiyath, Jessica Shen, and Barbara Ericson. 2026.
        Self-Regulated Personal Contracts as a Harm Reduction Approach to Generative AI in Undergraduate Programming Education.
        In <em>Proceedings of the 31st ACM Conference on Innovation and Technology in Computer Science Education V.1 (ITiCSE 2026)</em>,
        July 13–15, 2026, Madrid, Spain. ACM, New York, NY, USA, 7 pages.
    </div>
</section>

<section id="contact">
    <h2>Questions or Feedback?</h2>
    <p>
        If you're using this intervention in your course or have questions about implementation,
        please reach out to <a href="mailto:aadarsh@umich.edu">aadarsh@umich.edu</a>.
    </p>
</section>

</Tool>

<style>
    section {
        margin-bottom: 2.5em;
    }

    h2 {
        margin-top: 1.5em;
        margin-bottom: 0.8em;
        border-bottom: 2px solid #eee;
        padding-bottom: 0.3em;
    }

    ul {
        line-height: 1.8;
    }

    li {
        margin-bottom: 0.5em;
    }

    .download-link {
        font-size: 0.9em;
        font-weight: 600;
    }

    #related-paper ul {
        list-style: none;
        padding-left: 0;
    }

    #related-paper li {
        padding-left: 1.5em;
        position: relative;
        margin-bottom: 0.8em;
    }

    #related-paper li::before {
        content: "📄";
        position: absolute;
        left: 0;
    }

    .materials-table {
        width: 100%;
        border-collapse: collapse;
        margin: 1em 0;
        font-size: 0.95em;
    }

    .materials-table th,
    .materials-table td {
        border: 1px solid #dee2e6;
        padding: 0.6em 0.8em;
        text-align: left;
        vertical-align: top;
    }

    .materials-table th {
        background-color: #f0f0f0;
    }

    .materials-table td:first-child {
        white-space: nowrap;
        color: #666;
        font-size: 0.9em;
    }

    .materials-note {
        font-size: 0.9em;
        color: #555;
        font-style: italic;
        margin-top: 0.5em;
    }

    .code-block {
        background-color: #f8f9fa;
        border: 1px solid #dee2e6;
        border-left: 4px solid #6c757d;
        border-radius: var(--roundedness);
        padding: 1em 1.2em;
        margin: 1em 0;
        font-family: monospace;
        font-size: 0.9em;
        line-height: 1.5;
        overflow-x: auto;
    }

    .citation-box {
        background-color: #f8f9fa;
        padding: 1.5em;
        border-radius: var(--roundedness);
        border: 1px solid #dee2e6;
        font-family: 'Georgia', serif;
        line-height: 1.6;
    }
</style>
