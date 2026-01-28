<script>
    import Title from "$lib/components/Title.svelte";
    import Tool from "$lib/components/Tool.svelte";
</script>

<Title text="Critical Reflection and Agency in Computing Index" />

<Tool
    name="Critical Reflection and Agency in Computing Index"
    description="A psychometric instrument with evidence for validity to measure computing students' attitudes and perspectives toward ethical development. Grounded in Critically Conscious Computing theory and Paulo Freire's concept of conscientização, this index helps educators understand and track students' development of both critical reflection (awareness of socio-technical issues) and critical agency (confidence and power to address these issues)."
    type="Assessment Instrument"
    year="2025"
>

<section id="related-papers">
    <h2>Related Papers</h2>
    <ul>
        <li>
            <a href="https://doi.org/10.1145/3706598.3713189">Development of the Critical Reflection and Agency in Computing Index</a> (CHI 2025) 🏅
        </li>
        <li>
            <a href="https://doi.org/10.1145/3702652.3744208">Validation of the Critical Reflection and Agency in Computing Index: Do Computing Ethics Courses Make a Difference?</a> (ICER 2025)
        </li>
    </ul>
</section>

<section id="overview">
    <h2>Overview</h2>
    <p>
        The Critical Reflection and Agency in Computing Index, also called the Critical Computing Index (CCI), provides computing educators with a theoretically-grounded
        tool to systematically measure attitudes and perspectives toward ethical development. Through rigorous psychometric validation with 938 participants
        across two studies, we've established strong evidence for the instrument's reliability and validity.
    </p>
</section>

<section id="framework">
    <h2>Theoretical Framework: Critically Conscious Computing</h2>
    <p>
        The index is grounded in <strong>Critically Conscious Computing</strong>, a framework inspired by Paulo Freire's concept of
        <em>conscientização</em> (critical consciousness). We define Critically Conscious Computing as a form of computing practice in which individuals:
    </p>
    <ol class="framework-list">
        <li>
            <strong>Critical Reflection</strong> &mdash; Analyze the sociotechnical implications of computing systems and practices, including issues of power, politics, culture, and equity.
        </li>
        <li>
            <strong>Critical Agency</strong> &mdash; Develop the sense of agency to question and challenge norms, assumptions, and practices in computing.
        </li>
        <li>
            <strong>Critical Action</strong> &mdash; Take action to serve the needs and interests of diverse and marginalized communities, whether through creating new technologies, reshaping existing ones, or resisting the use of computing in harmful ways.
        </li>
    </ol>
    <p>
        Critical consciousness theory posits that as individuals develop a deeper understanding of systemic issues (reflection)
        and recognize their own capacity and power to effect change (agency), they are more likely to engage in transformative praxis (action).
        This index measures the first two components &mdash; reflection and agency &mdash; as foundational attitudes that precede ethical action in computing contexts.
    </p>
</section>

<section id="full-index">
    <h2>Full Index</h2>
    <p>The index consists of 31 Likert-scale items distributed across two main constructs. We recommend administering with a 6-point Likert scale (Strongly Disagree to Strongly Agree).</p>

    <div class="construct-section">
        <h3>Critical Reflection (22 items)</h3>
        <p>
            As a scale, we operationalize this construct as technosolutionism (reverse-coded), valuing marginalized perspectives, and valuing ethics training. We also include two standalone items.
        </p>

        <div class="question-block">
            <div class="question-prompt">
                <strong>Question Wording:</strong> Computing technologies have wide-ranging impacts on society. Please indicate the extent to which you agree or disagree with the following statements:
            </div>

            <div class="subscale">
                <div class="subscale-group">
                    <h5>Standalone Items</h5>
                    <ol class="item-list">
                        <li>Computing should inform, not replace, human decision-making.</li>
                        <li>We should prioritize computational solutions over human judgment. <span class="reverse">(R)</span></li>
                    </ol>
                </div>

                <div class="subscale-group">
                    <h5>Techno-Solutionism <span class="reliability">(4 items, α = .79)</span></h5>
                    <ol class="item-list" start="3">
                        <li>With enough resources, computing technologies can solve any problem. <span class="reverse">(R)</span></li>
                        <li>Datasets that are large enough can overcome any bias in collection. <span class="reverse">(R)</span></li>
                        <li>Biases in datasets can always be corrected with the right techniques. <span class="reverse">(R)</span></li>
                        <li>Computing technologies benefit everyone equally. <span class="reverse">(R)</span></li>
                    </ol>
                </div>

                <div class="subscale-group">
                    <h5>Valuing Marginalized Perspectives <span class="reliability">(2 items, α = .63)</span></h5>
                    <ol class="item-list" start="7">
                        <li>Considering issues of social justice should be a fundamental consideration in the design and development of any computing system.</li>
                        <li>Developing computer software for public use requires input from marginalized groups.</li>
                    </ol>
                </div>
            </div>
        </div>

        <div class="question-block">
            <div class="question-prompt">
                <strong>Question Wording:</strong> Different professions require different training. Please indicate the extent to which you agree or disagree that the following should be part of training for every software engineer:
            </div>

            <div class="subscale">
                <div class="subscale-group">
                    <h5>Valuing Ethics Training <span class="reliability">(7 items, α = .89)</span></h5>
                    <ol class="item-list">
                        <li>The social impacts of software.</li>
                        <li>The environmental impacts of software.</li>
                        <li>Legal considerations in software development.</li>
                        <li>Ethical implications of topics being studied.</li>
                        <li>Collaborating on software development projects with local community groups.</li>
                        <li>Guidelines for discussing ethical issues with others.</li>
                        <li>A software development code of ethics.</li>
                    </ol>
                </div>

                <div class="subscale-group">
                    <h5>Valuing Technical Training <span class="reliability">(comparison items)</span></h5>
                    <ol class="item-list" start="8">
                        <li>Computer architectures. <span class="comparison">(0)</span></li>
                        <li>Databases. <span class="comparison">(0)</span></li>
                        <li>Technical programming skills. <span class="comparison">(0)</span></li>
                        <li>Software quality assurance and testing. <span class="comparison">(0)</span></li>
                        <li>Computer science theory and algorithms. <span class="comparison">(0)</span></li>
                        <li>Identifying requirements to build software. <span class="comparison">(0)</span></li>
                        <li>Data structures. <span class="comparison">(0)</span></li>
                    </ol>
                </div>
            </div>
        </div>
    </div>

    <div class="construct-section">
        <h3>Critical Agency (9 items)</h3>
        <p>
            As a scale, we operationalize this construct as personal effectiveness (the belief in one's ability to uphold ethical conduct and communicate ethics perspectives) and system responsiveness (the belief that ethical concerns raised will be heard and addressed in computing projects and workplaces).
        </p>

        <div class="question-block">
            <div class="question-prompt">
                <strong>Question Wording:</strong> Please indicate the extent to which you agree or disagree with the following:
            </div>

            <div class="subscale">
                <div class="subscale-group">
                    <h5>Personal Effectiveness <span class="reliability">(5 items, α = .89)</span></h5>
                    <ol class="item-list">
                        <li>I have a good understanding of the important ethical and social impacts to consider when developing software.</li>
                        <li>I am able to participate in discussions about ethics and social impacts of computing.</li>
                        <li>I am confident in my own ability to uphold ethical conduct in software development.</li>
                        <li>I am better informed about the ethics and societal impacts of technology than most of my software developer peers.</li>
                        <li>When working on computing projects with others, I could effectively voice my perspectives on ethical issues.</li>
                    </ol>
                </div>

                <div class="subscale-group">
                    <h5>System Responsiveness <span class="reliability">(4 items, α = .84)</span></h5>
                    <ol class="item-list" start="6">
                        <li>There are processes within workplaces to handle reported ethical computing violations or concerns.</li>
                        <li>When I talk about ethical computing issues, my peers usually pay attention.</li>
                        <li>Software development professionals are allowed to have a say about ethical computing concerns at their workplaces.</li>
                        <li>When ethical computing concerns are raised by employees, workplaces are responsive to addressing these concerns.</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>

    <div class="legend">
        <h4>Legend</h4>
        <ul>
            <li><span class="reverse">(R)</span> = Reverse-coded item (higher scores indicate less critical reflection)</li>
            <li><span class="comparison">(0)</span> = Comparison item (not scored as part of ethics subscales)</li>
            <li><span class="reliability">α</span> = Cronbach's alpha (internal consistency reliability)</li>
        </ul>
    </div>
</section>

<section id="usage">
    <h2>How to Use It</h2>

    <h3>Administration</h3>
    <ul>
        <li>We recommend using a 6-point Likert scale format (from "Strongly Disagree" to "Strongly Agree")</li>
        <li>Administration time: approximately 5-15 minutes</li>
        <li>Can be administered online or in paper format</li>
        <li><a href="https://docs.google.com/forms/d/1GcrBhXXPnx1tJyuTPhen8QgwuOArKsdm3kHT2CS-sWk/template/preview">Copy a ready-made Google Form version</a> to use as a starting point for online administration</li>
    </ul>

    <h3>Scoring & Analysis</h3>
    <ol>
        <li><strong>Reverse-code items marked with (R)</strong> before any analysis. For a 6-point scale, reverse-code as: 1→6, 2→5, 3→4, 4→3, 5→2, 6→1. After reverse-coding, higher scores indicate less technosolutionist beliefs (i.e., more critical reflection).</li>
        <li><strong>Check internal reliability</strong> for each subscale in your sample using Cronbach's alpha (α). When α ≥ .70, calculate the subscale score as the mean of its items. When α &lt; .70, analyze items individually rather than averaging into a composite score.</li>
        <li><strong>Calculate subscale scores</strong> by averaging responses across items within each reliable subscale. Higher scores indicate stronger agreement with the operationalization.</li>
        <li><strong>For the Valuing Technical Training comparison items:</strong> These are not scored as part of the ethics subscales. Instead, compare the mean of Valuing Ethics Training items against the mean of Valuing Technical Training items to assess whether students differentially value ethical vs. technical education.</li>
        <li><strong>Select appropriate statistical tests</strong> based on your design:
            <ul>
                <li><strong>Pre/post (paired) data:</strong> Use the Wilcoxon Signed Rank Test for paired comparisons. Check that the distribution of differences is symmetric (e.g., via Anderson-Darling normality test or graphical inspection); if not symmetric, use the Sign Test instead.</li>
                <li><strong>Independent samples:</strong> Use the Wilcoxon Rank Sum Test (Mann-Whitney U) for comparisons between groups.</li>
            </ul>
        </li>
        <li><strong>Report effect sizes</strong> alongside significance tests: r = Z / √N for Wilcoxon tests, or Cliff's delta for Sign Tests.</li>
    </ol>

    <h3>Recommended Research Applications</h3>
    <ul>
        <li><strong>Pre/Post Assessment:</strong> Measure changes in critical consciousness before and after ethics courses</li>
        <li><strong>Initial Assessment:</strong> Tailor targeted interventions based on specific class profiles</li>
        <li><strong>Program Evaluation:</strong> Compare outcomes across different pedagogical approaches</li>
        <li><strong>Cross-Institutional Studies:</strong> Our standardized measurement enables comparison across institutions</li>
    </ul>

    <h3>Terminology</h3>
    <p>When reporting results, we recommend using the following terms consistently:</p>
    <table class="terminology-table">
        <thead>
            <tr>
                <th>Term</th>
                <th>Refers to</th>
                <th>Example</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Index</strong></td>
                <td>The full instrument, comprising multiple scales</td>
                <td>The Critical Computing Index (CCI)</td>
            </tr>
            <tr>
                <td><strong>Construct</strong></td>
                <td>A theoretical concept the index aims to measure</td>
                <td>Critical Reflection, Critical Agency</td>
            </tr>
            <tr>
                <td><strong>Operationalization</strong></td>
                <td>How a construct is concretely defined and measured via a group of items</td>
                <td>Technosolutionism, Personal Effectiveness</td>
            </tr>
            <tr>
                <td><strong>Scale</strong></td>
                <td>The set of items that together measure a construct</td>
                <td>The Critical Reflection scale (22 items)</td>
            </tr>
            <tr>
                <td><strong>Sub-scale</strong></td>
                <td>A subset of a scale measuring a specific facet of the construct</td>
                <td>Technosolutionism, Valuing Ethics Training</td>
            </tr>
            <tr>
                <td><strong>Item</strong></td>
                <td>An individual survey question within an operationalization</td>
                <td>"We should prioritize computational solutions over human judgment."</td>
            </tr>
        </tbody>
    </table>
</section>



<section id="citation">
    <h2>How to Cite</h2>

    <h3>Development Paper</h3>
    <div class="citation-box">
        Aadarsh Padiyath, Mark Guzdial, and Barbara Ericson. 2025.
        Development of the Critical Reflection and Agency in Computing Index.
        In <em>Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems (CHI '25)</em>,
        April 26–May 1, 2025, Yokohama, Japan. ACM, New York, NY, USA, 11 pages.
        <a href="https://doi.org/10.1145/3706598.3713189">https://doi.org/10.1145/3706598.3713189</a>
    </div>

    <h3>Validation Paper</h3>
    <div class="citation-box">
        Aadarsh Padiyath, Casey Fiesler, Mark Guzdial, and Barbara Ericson. 2025.
        Validation of the Critical Reflection and Agency in Computing Index: Do Computing Ethics Courses Make a Difference?
        In <em>ACM Conference on International Computing Education Research V.1 (ICER 2025 Vol. 1)</em>,
        August 3–6, 2025, Charlottesville, VA, USA. ACM, New York, NY, USA, 19 pages.
        <a href="https://doi.org/10.1145/3702652.3744208">https://doi.org/10.1145/3702652.3744208</a>
    </div>
</section>

<section id="limitations">
    <h2>Limitations & Considerations</h2>
    <ul>
        <li><strong>Geographic scope:</strong> Validated with U.S.-based computing students and professionals; generalizability to other cultural contexts may require additional validation.</li>
        <li><strong>Self-report measures:</strong> Subject to social desirability bias, Hawthorne effect</li>
        <li><strong>Temporal stability:</strong> As notions of computing ethics evolves, the constructs as operationalized and measured may need periodic review and updates</li>
    </ul>
</section>

<section id="contact">
    <h2>Questions or Feedback?</h2>
    <p>
        If you're using this index in your research or have questions about implementation and analysis,
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

    h3 {
        margin-top: 1.2em;
        margin-bottom: 0.5em;
        color: #333;
    }

    h4 {
        margin-top: 0.8em;
        margin-bottom: 0.3em;
    }

    h5 {
        margin-top: 1em;
        margin-bottom: 0.5em;
        font-size: 0.95em;
        color: #444;
    }

    .framework-list {
        padding-left: 1.5em;
    }

    .framework-list li {
        margin-bottom: 0.8em;
        line-height: 1.6;
    }

    .construct-section {
        margin-bottom: 2em;
    }

    .construct-section > h3 {
        background-color: #f0f0f0;
        padding: 0.5em 0.8em;
        border-radius: var(--roundedness);
        margin-bottom: 0.5em;
    }

    .question-block {
        margin: 1.5em 0;
    }

    .question-prompt {
        background-color: #e8f4f8;
        padding: 1em;
        border-radius: var(--roundedness);
        margin-bottom: 1em;
        font-style: italic;
        border-left: 4px solid #17a2b8;
    }

    .question-prompt strong {
        font-style: normal;
    }

    .subscale {
        background-color: #f8f9fa;
        padding: 1em;
        margin: 1em 0;
        border-radius: var(--roundedness);
        border-left: 4px solid var(--border-color);
    }

    .subscale-group {
        margin: 1em 0;
        padding-left: 0.5em;
    }

    .subscale-group h5 {
        border-bottom: 1px solid #ddd;
        padding-bottom: 0.3em;
    }

    .item-list {
        margin: 0.5em 0;
        padding-left: 2em;
    }

    .item-list li {
        margin-bottom: 0.6em;
        line-height: 1.5;
    }

    .reverse {
        color: #dc3545;
        font-weight: 600;
        font-size: 0.85em;
    }

    .comparison {
        color: #6c757d;
        font-weight: 600;
        font-size: 0.85em;
    }

    .reliability {
        color: #666;
        font-weight: normal;
        font-size: 0.85em;
    }

    .legend {
        background-color: #f8f9fa;
        padding: 1em;
        margin-top: 2em;
        border-radius: var(--roundedness);
        border: 1px solid #dee2e6;
    }

    .legend h4 {
        margin-top: 0;
        margin-bottom: 0.5em;
    }

    .legend ul {
        margin: 0;
        padding-left: 1.5em;
    }

    .legend li {
        margin-bottom: 0.3em;
    }

    .terminology-table {
        width: 100%;
        border-collapse: collapse;
        margin: 1em 0;
        font-size: 0.95em;
    }

    .terminology-table th,
    .terminology-table td {
        border: 1px solid #dee2e6;
        padding: 0.6em 0.8em;
        text-align: left;
    }

    .terminology-table th {
        background-color: #f0f0f0;
    }

    .terminology-table td:first-child {
        white-space: nowrap;
    }

    .citation-box {
        background-color: #f8f9fa;
        padding: 1.5em;
        margin-bottom: 1.5em;
        border-radius: var(--roundedness);
        border: 1px solid #dee2e6;
        font-family: 'Georgia', serif;
        line-height: 1.6;
    }

    #citation h3 {
        font-size: 1em;
        margin-top: 1em;
        margin-bottom: 0.5em;
        color: #666;
        font-weight: 600;
    }

    #related-papers ul {
        list-style: none;
        padding-left: 0;
    }

    #related-papers li {
        padding-left: 1.5em;
        position: relative;
        margin-bottom: 0.8em;
    }

    #related-papers li::before {
        content: "📄";
        position: absolute;
        left: 0;
    }

    ul {
        line-height: 1.8;
    }

    li {
        margin-bottom: 0.5em;
    }
</style>
