const ratings = [
  {
    score: 1,
    label: "Unsatisfactory",
    summary:
      "Performance is significantly below expectations in one or more critical areas and requires immediate intervention, clear feedback, and a documented improvement plan.",
  },
  {
    score: 2,
    label: "Needs Development",
    summary:
      "Performance partially meets expectations but is inconsistent and requires support, closer follow-up, or improvement in specific areas.",
  },
  {
    score: 3,
    label: "Strong Performance",
    summary:
      "Consistently delivers successful performance at the expected scope and complexity of the role. This is the standard expected for fully effective employees.",
  },
  {
    score: 4,
    label: "Strong Stretch Performance",
    summary:
      "Consistently exceeds expectations within and sometimes adjacent to normal role scope, with broader influence, stronger judgement, or higher effectiveness than typically expected at the level.",
  },
  {
    score: 5,
    label: "Exceptional Performance",
    summary:
      "Delivers sustained, role-defining impact that materially raises the bar for peers at the same level through exceptional outcomes, leverage, expertise, or organisational contribution.",
  },
];

const drivers = [
  {
    name: "Impact",
    description:
      "Results, delivery quality, prioritisation, and measurable impact on customers, colleagues, processes, revenue, risk, or business outcomes.",
    questions: [
      "Did the employee consistently deliver the outcomes expected for their role?",
      "Were deliverables completed with the expected quality and reliability?",
      "Did their work create measurable value for customers, the team, or the business?",
      "How independently did they manage competing priorities?",
      "Did they improve outcomes beyond what was initially expected?",
      "Would peers at the same level consider this level of impact typical, strong, or exceptional?",
      "Was impact sustained throughout the review period or isolated to a few moments?",
      "Did they require significant intervention, rework, or escalation?",
    ],
    anchors: {
      1: {
        ask: [
          "Were goals or deadlines repeatedly missed without recovery?",
          "Did quality issues significantly affect team delivery or customer outcomes?",
          "Was substantial rework frequently required?",
          "Did the employee struggle to produce meaningful role-level impact?",
          "Were issues sustained despite feedback and support?",
        ],
        evidence: [
          "Repeated missed commitments.",
          "Ongoing quality concerns.",
          "Frequent escalation required.",
          "Persistent lack of measurable contribution.",
        ],
      },
      2: {
        ask: [
          "Was delivery inconsistent across the review period?",
          "Did the employee meet some goals but miss others?",
          "Did they require support to achieve expected outcomes?",
          "Was prioritisation or execution unreliable at times?",
          "Did output quality fluctuate noticeably?",
        ],
        evidence: [
          "Partial or uneven outcomes.",
          "Missed expectations in some areas.",
          "Inconsistent execution.",
          "Moderate dependence on others for delivery.",
        ],
      },
      3: {
        ask: [
          "Did the employee reliably meet goals and deadlines?",
          "Was work delivered at the expected quality for their role?",
          "Did stakeholders consistently receive the expected value from their work?",
          "Did they manage priorities effectively within their scope?",
          "Were outcomes dependable and sustainable?",
        ],
        evidence: [
          "Consistent delivery.",
          "Reliable quality.",
          "Expected business impact.",
          "Solid execution across the review period.",
        ],
      },
      4: {
        ask: [
          "Did the employee regularly exceed expected outcomes for their role?",
          "Did they improve efficiency, quality, or effectiveness beyond baseline expectations?",
          "Did they create stronger customer or business outcomes than peers at the same level?",
          "Did they elevate results across projects or teams?",
          "Were these stronger outcomes sustained over time?",
        ],
        evidence: [
          "Delivery beyond role expectations.",
          "Process or quality improvements.",
          "Higher-than-expected impact.",
          "Stronger outcomes achieved consistently.",
        ],
      },
      5: {
        ask: [
          "Did the employee consistently produce exceptional outcomes compared with peers at the same level?",
          "Did their work materially raise standards, outcomes, or effectiveness for others?",
          "Was their impact recognised broadly and repeatedly?",
          "Did their contributions create sustained business value beyond normal expectations?",
          "Would the organisation noticeably feel the absence of their contribution?",
        ],
        evidence: [
          "Exceptional measurable impact.",
          "Organisationally recognised contribution.",
          "Sustained high-value outcomes.",
          "Role-model level execution.",
        ],
      },
    },
  },
  {
    name: "Ownership",
    description:
      "Accountability, initiative, follow-through, resilience, and maintaining momentum on priorities.",
    questions: [
      "Does the employee take responsibility for outcomes, not just tasks?",
      "How reliably do they follow through on commitments?",
      "Do they proactively identify risks, issues, or opportunities?",
      "How effectively do they operate when priorities shift or ambiguity increases?",
      "Do they maintain momentum without close supervision?",
      "How resilient are they during setbacks or pressure?",
      "Do they improve how work gets done, or simply complete assigned work?",
    ],
    anchors: {
      1: {
        ask: [
          "Does the employee regularly avoid accountability?",
          "Do tasks frequently stall without intervention?",
          "Are commitments routinely dropped or forgotten?",
          "Do they require persistent supervision to maintain progress?",
        ],
        evidence: [
          "Low follow-through.",
          "Avoidance of responsibility.",
          "Frequent escalation.",
          "Unreliable execution.",
        ],
      },
      2: {
        ask: [
          "Does the employee complete work mainly when directed?",
          "Do they struggle to maintain momentum independently?",
          "Are risks flagged too late?",
          "Do they lose effectiveness during ambiguity or change?",
        ],
        evidence: [
          "Reactive behaviour.",
          "Inconsistent ownership.",
          "Limited initiative.",
          "Dependence on manager direction.",
        ],
      },
      3: {
        ask: [
          "Does the employee reliably own their work end-to-end?",
          "Do they proactively communicate risks or blockers?",
          "Are commitments followed through consistently?",
          "Do they demonstrate sound judgement within their remit?",
        ],
        evidence: [
          "Reliable accountability.",
          "Strong follow-through.",
          "Effective prioritisation.",
          "Dependable execution.",
        ],
      },
      4: {
        ask: [
          "Does the employee proactively solve problems beyond immediate assignments?",
          "Do they independently drive work through ambiguity or changing priorities?",
          "Do they identify opportunities to improve outcomes or processes?",
          "Are they seen as highly dependable under pressure?",
        ],
        evidence: [
          "Strong initiative.",
          "Consistent proactive behaviour.",
          "Ownership beyond assigned tasks.",
          "Resilience during complexity.",
        ],
      },
      5: {
        ask: [
          "Does the employee consistently elevate team effectiveness through ownership?",
          "Do others rely on them to stabilise complex or ambiguous situations?",
          "Have they materially improved how work gets done?",
          "Do they positively influence ownership behaviours in others?",
        ],
        evidence: [
          "Exceptional reliability.",
          "Organisational influence.",
          "System-level improvements.",
          "Trusted leadership without formal authority.",
        ],
      },
    },
  },
  {
    name: "Expertise",
    description:
      "Role-relevant technical or functional competence, problem-solving, applied knowledge, and use of relevant tools and methods.",
    questions: [
      "Does the employee demonstrate the expected level of technical or functional competence for their role?",
      "How independently can they solve problems?",
      "Can they handle moderately complex work without significant support?",
      "Do they apply sound judgement consistently?",
      "Do they contribute improvements, knowledge sharing, or better ways of working?",
      "How reliable is their expertise under pressure or ambiguity?",
      "Would peers seek them out for guidance or problem-solving?",
    ],
    anchors: {
      1: {
        ask: [
          "Are there significant gaps in core role skills?",
          "Does the employee struggle with routine responsibilities?",
          "Do they require substantial support for basic work?",
          "Is independent problem-solving consistently weak?",
        ],
        evidence: [
          "Major skill gaps.",
          "Frequent dependence.",
          "Low confidence in execution.",
          "Inability to complete standard work independently.",
        ],
      },
      2: {
        ask: [
          "Is the employee still developing foundational capability?",
          "Can they handle routine work but struggle with complexity?",
          "Is their application of knowledge inconsistent?",
          "Do they require regular guidance?",
        ],
        evidence: [
          "Uneven technical execution.",
          "Reliance on support.",
          "Limited problem-solving depth.",
          "Inconsistent judgement.",
        ],
      },
      3: {
        ask: [
          "Does the employee demonstrate role-appropriate expertise consistently?",
          "Can they independently solve routine and moderately complex problems?",
          "Do they apply sound judgement and standard practices effectively?",
          "Are they reliable in their functional or technical contribution?",
        ],
        evidence: [
          "Solid technical capability.",
          "Reliable judgement.",
          "Independent execution.",
          "Consistent role-level competence.",
        ],
      },
      4: {
        ask: [
          "Does the employee handle complex work effectively within their scope?",
          "Have they improved tools, standards, systems, or practices?",
          "Do they raise the technical effectiveness of others?",
          "Are they recognised as especially strong for their level?",
        ],
        evidence: [
          "Advanced role-level capability.",
          "Repeatable improvements.",
          "Strong problem-solving.",
          "Trusted expertise.",
        ],
      },
      5: {
        ask: [
          "Does the employee demonstrate exceptional expertise relative to peers?",
          "Can they solve unfamiliar or difficult problems with strong judgement?",
          "Do their insights materially strengthen team effectiveness?",
          "Are they a go-to expert within their area?",
        ],
        evidence: [
          "Deep expertise.",
          "Exceptional reliability.",
          "Broad influence through knowledge.",
          "High-impact technical judgement.",
        ],
      },
    },
  },
  {
    name: "Collaboration",
    description:
      "Cross-functional teamwork, constructive communication, conflict handling, influence without authority, and enabling others.",
    questions: [
      "How effectively does the employee work with others?",
      "Do they communicate clearly, respectfully, and proactively?",
      "How well do they handle disagreement or tension?",
      "Do they build trust with stakeholders?",
      "Can they influence outcomes without formal authority?",
      "Do they contribute positively to team effectiveness?",
      "Do they help align people toward shared outcomes?",
    ],
    anchors: {
      1: {
        ask: [
          "Does the employee regularly create friction, confusion, or breakdowns in collaboration?",
          "Do stakeholders avoid working with them?",
          "Is communication frequently unclear or counterproductive?",
          "Do they undermine shared progress?",
        ],
        evidence: [
          "Poor stakeholder relationships.",
          "Collaboration avoidance.",
          "Communication issues.",
          "Negative team impact.",
        ],
      },
      2: {
        ask: [
          "Is collaboration inconsistent depending on stakeholder or situation?",
          "Does the employee avoid difficult conversations or alignment work?",
          "Is follow-through in communication unreliable?",
          "Do misunderstandings occur more frequently than expected?",
        ],
        evidence: [
          "Uneven collaboration.",
          "Limited influence.",
          "Inconsistent communication.",
          "Difficulty navigating conflict.",
        ],
      },
      3: {
        ask: [
          "Does the employee work constructively with colleagues and stakeholders?",
          "Is communication clear and professional?",
          "Do they contribute positively to shared goals?",
          "Can they manage disagreement respectfully?",
        ],
        evidence: [
          "Strong working relationships.",
          "Clear communication.",
          "Positive team contribution.",
          "Professional stakeholder management.",
        ],
      },
      4: {
        ask: [
          "Does the employee proactively build strong stakeholder relationships?",
          "Do they align people effectively around shared outcomes?",
          "Can they navigate tension constructively while maintaining trust?",
          "Do they improve collaboration across teams or functions?",
        ],
        evidence: [
          "High-trust relationships.",
          "Strong alignment capability.",
          "Effective influence.",
          "Constructive conflict resolution.",
        ],
      },
      5: {
        ask: [
          "Does the employee act as a collaboration catalyst across groups?",
          "Do they consistently strengthen outcomes through influence and trust-building?",
          "Are they relied upon to resolve complex cross-functional challenges?",
          "Have they materially improved team or organisational collaboration?",
        ],
        evidence: [
          "Exceptional influence.",
          "Cross-functional leadership.",
          "Trusted partnership building.",
          "Organisation-wide collaboration impact.",
        ],
      },
    },
  },
  {
    name: "Growth",
    description:
      "Learning agility, adaptability, openness to feedback, and development of capabilities relevant to evolving role or business needs.",
    questions: [
      "How open is the employee to feedback?",
      "Do they apply learning and improve over time?",
      "How effectively do they adapt to change or ambiguity?",
      "Do they proactively develop new skills?",
      "Are they building capabilities aligned to future business needs?",
      "Do they demonstrate curiosity and learning agility?",
      "Do they help others learn or adapt?",
    ],
    anchors: {
      1: {
        ask: [
          "Does the employee resist feedback or change?",
          "Are the same issues repeatedly observed despite coaching?",
          "Do they struggle significantly when priorities evolve?",
          "Is progress on development gaps minimal?",
        ],
        evidence: [
          "Resistance to feedback.",
          "Repeated mistakes.",
          "Low adaptability.",
          "Limited growth.",
        ],
      },
      2: {
        ask: [
          "Does the employee accept feedback but apply it inconsistently?",
          "Do they adapt slowly or only with support?",
          "Is progress uneven across development areas?",
          "Do old patterns frequently return?",
        ],
        evidence: [
          "Inconsistent improvement.",
          "Moderate adaptability challenges.",
          "Slow application of learning.",
          "Development regression.",
        ],
      },
      3: {
        ask: [
          "Is the employee open to learning and feedback?",
          "Do they apply lessons learned over time?",
          "Can they adapt reasonably well to changing priorities or tools?",
          "Are they actively developing relevant skills?",
        ],
        evidence: [
          "Steady learning.",
          "Constructive response to feedback.",
          "Consistent adaptation.",
          "Ongoing development.",
        ],
      },
      4: {
        ask: [
          "Does the employee actively seek feedback and stretch opportunities?",
          "Do they adapt quickly to ambiguity or change?",
          "Are they proactively building new capabilities aligned to team or business needs?",
          "Do they demonstrate strong learning agility compared with peers?",
        ],
        evidence: [
          "Fast learning.",
          "High adaptability.",
          "Proactive development.",
          "Strong growth mindset.",
        ],
      },
      5: {
        ask: [
          "Does the employee anticipate future capability needs?",
          "Do they help others adapt, learn, or evolve?",
          "Have they developed expertise that meaningfully benefits the broader organisation?",
          "Are they recognised for exceptional adaptability and learning agility?",
        ],
        evidence: [
          "Strategic capability building.",
          "Organisation-level learning impact.",
          "Exceptional adaptability.",
          "Influence on broader team growth.",
        ],
      },
    },
  },
  {
    name: "Integrity",
    description:
      "Acts with integrity, sound judgement, and respect, building trust and acting in line with Omada's values.",
    questions: [
      "Is the employee trusted by colleagues and stakeholders?",
      "Do they demonstrate honesty, transparency, and accountability?",
      "Do they exercise sound judgement, especially under pressure?",
      "Are they dependable in sensitive or ambiguous situations?",
      "Do their actions align with company values and expectations?",
      "How consistently do they reinforce respectful and ethical behaviour?",
    ],
    anchors: {
      1: {
        ask: [
          "Has the employee repeatedly behaved in ways that undermine trust?",
          "Have there been serious judgement, conduct, or transparency concerns?",
          "Have expectations around confidentiality, respect, or integrity been violated?",
          "Has behaviour negatively affected team trust or safety?",
        ],
        evidence: [
          "Trust concerns.",
          "Serious judgement issues.",
          "Behavioural inconsistency.",
          "Values misalignment.",
        ],
      },
      2: {
        ask: [
          "Is judgement inconsistent or unreliable at times?",
          "Does the employee require regular guidance to remain aligned with expectations?",
          "Are follow-through or transparency inconsistent?",
          "Have there been repeated concerns requiring coaching?",
        ],
        evidence: [
          "Inconsistent reliability.",
          "Uneven judgement.",
          "Coaching dependency.",
          "Trust gaps.",
        ],
      },
      3: {
        ask: [
          "Does the employee consistently behave with honesty and professionalism?",
          "Are they dependable and respectful?",
          "Do they exercise sound judgement appropriate to their role?",
          "Are they trusted to handle responsibilities appropriately?",
        ],
        evidence: [
          "Consistent professionalism.",
          "Reliable judgement.",
          "Strong dependability.",
          "Alignment with company values.",
        ],
      },
      4: {
        ask: [
          "Is the employee relied upon in sensitive or ambiguous situations?",
          "Do they model strong values-based behaviour for others?",
          "Do they consistently demonstrate maturity and strong judgement?",
          "Have they strengthened trust across stakeholders?",
        ],
        evidence: [
          "Trusted advisor behaviour.",
          "Strong role modelling.",
          "Consistent sound judgement.",
          "Positive trust impact.",
        ],
      },
      5: {
        ask: [
          "Does the employee set the standard for integrity and trustworthiness?",
          "Do they make principled decisions under pressure?",
          "Have they actively strengthened accountability or ethical culture?",
          "Are they deeply trusted across teams or functions?",
        ],
        evidence: [
          "Exceptional trust.",
          "Values leadership.",
          "Strong ethical judgement.",
          "Broad organisational credibility.",
        ],
      },
    },
  },
];

const anchorSummaries = {
  Impact: {
    1: "Regularly misses agreed goals or deadlines. Output is often below required standard and needs significant rework. Work often lacks clear business, customer, or role-level impact.",
    2: "Sometimes meets expectations but with inconsistent quality, prioritisation, or timeliness. Impact is uneven and may require support to achieve expected outcomes.",
    3: "Consistently delivers expected outcomes at the required quality and timeliness for the role. Produces reliable, measurable impact aligned to role objectives and stakeholder needs.",
    4: "Frequently delivers outcomes that exceed normal expectations for the role through stronger execution, improved efficiency, higher quality, or broader influence within their domain.",
    5: "Consistently delivers exceptional, sustained impact that materially improves team, customer, or business outcomes and raises the standard for peers at the same level.",
  },
  Ownership: {
    1: "Avoids taking responsibility. Relies heavily on direction to initiate or progress work and may not consistently follow through on tasks. Rarely maintains focus without close supervision.",
    2: "Takes responsibility inconsistently and often requires direction or reminders to maintain focus, especially when work becomes difficult or ambiguous.",
    3: "Takes clear ownership of work and commitments. Follows through reliably, identifies risks early, exercises sound judgement, and keeps priorities moving appropriately.",
    4: "Proactively identifies and addresses problems or opportunities, remains resilient through ambiguity or competing priorities, and independently drives work to resolution.",
    5: "Consistently improves how work is delivered within their team or area, demonstrates exceptional reliability in ambiguous situations, and positively influences others through strong ownership and follow-through.",
  },
  Expertise: {
    1: "Lacks core skills needed for the role and struggles to complete routine work without significant support. Often uncertain how to proceed independently.",
    2: "Demonstrates developing capability but still requires support for standard or moderately complex work. Application of knowledge is inconsistent.",
    3: "Demonstrates solid role-appropriate expertise, judgement, and problem-solving ability. Independently handles routine and moderately complex work effectively.",
    4: "Demonstrates strong expertise for the role level, handles complex problems effectively, and contributes practical improvements, standards, or reusable approaches that improve team effectiveness.",
    5: "Demonstrates deep and highly reliable expertise within scope. Solves complex or unfamiliar problems with strong judgement and contributes knowledge, systems, or improvements that significantly strengthen broader team capability.",
  },
  Collaboration: {
    1: "Frequently struggles to collaborate effectively, communicate clearly, or maintain constructive working relationships.",
    2: "Collaborates inconsistently across stakeholders. Communication is generally clear but may lack alignment or follow-through. Can collaborate effectively on tasks but may avoid challenging situations.",
    3: "Works constructively and respectfully with colleagues and stakeholders. Communicates effectively, contributes positively to shared goals, and handles disagreement professionally.",
    4: "Builds strong working relationships across stakeholders, proactively shares context, aligns people toward shared outcomes, and navigates tension constructively to maintain trust and momentum.",
    5: "Acts as a catalyst for collaboration across teams or functions. Builds high-trust partnerships that enable stronger collective outcomes, alignment, and problem-solving.",
  },
  Growth: {
    1: "Resists feedback or change, may repeat the same mistakes, and shows limited progress on known development areas despite support.",
    2: "Accepts feedback but applies it inconsistently. Adapts slowly to changing priorities, tools, or ways of working and makes inconsistent progress toward development areas.",
    3: "Open to feedback and learning. Applies lessons learned, adapts to changing priorities with reasonable support, and actively develops role-relevant capabilities.",
    4: "Demonstrates strong learning agility by seeking feedback, adapting effectively to change or ambiguity, and building skills aligned to evolving team or business needs.",
    5: "Demonstrates exceptional learning agility. Anticipates future capability needs, proactively develops expertise that benefits the broader organisation, and helps others adopt improved ways of working.",
  },
  Integrity: {
    1: "Behaviour significantly undermines trust, reliability, or alignment with expected standards and values, including careless handling of sensitive or confidential information.",
    2: "Usually intends to act appropriately but demonstrates inconsistent judgement, transparency, reliability, or alignment with expected values and standards.",
    3: "Acts with honesty, consistency, sound judgement, and professionalism. Is dependable, respects confidentiality, and behaves in line with Omada values and expectations.",
    4: "Consistently demonstrates strong judgement, trustworthiness, and values-based behaviour. Is relied upon in sensitive, complex, or ambiguous situations.",
    5: "Sets a strong example of integrity and principled decision-making. Reinforces trust, accountability, transparency, and values-led behaviour across others.",
  },
};

const guidance = [
  {
    title: "Use questions as signals, not a tally",
    items: [
      "A high number of yes answers suggests the next anchor should be tested, but it does not calculate the rating.",
      "One no can hold the rating down when it relates to a critical role expectation, integrity, quality, risk, or sustained impact.",
      "A higher score needs evidence that the higher anchor is met in outcomes, behaviours, judgement, and role-level scope.",
    ],
  },
  {
    title: "Start from 3, then test up or down",
    items: [
      "First ask whether the employee consistently met expected role standards for the driver.",
      "If most 3-anchor questions are supported by evidence and there are no material gaps, 3 is likely the right rating.",
      "Move away from 3 only when the evidence clearly points to either sustained stretch or meaningful inconsistency.",
    ],
  },
  {
    title: "When to test a higher score",
    items: [
      "If roughly 80% or more of the current anchor questions are yes, review the next anchor rather than stopping at the current one.",
      "For 4, look for sustained stronger outcomes, broader influence, better judgement, or higher effectiveness than normally expected at the level.",
      "For 5, require role-defining contribution that materially raises standards for peers and is supported by evidence across the review period.",
    ],
  },
  {
    title: "When to test a lower score",
    items: [
      "If several expected outcomes or behaviours are not met, test the anchor below the starting point.",
      "If one gap is critical enough to affect customers, risk, trust, delivery, or team effectiveness, do not average it away.",
      "Use 1 only for serious and sustained gaps where clear feedback, intervention, and documented follow-up are present.",
    ],
  },
  {
    title: "Separate scope from performance quality",
    items: [
      "Rate performance relative to the employee's current role level, not tenure, title, popularity, or seniority.",
      "Both junior and senior employees can earn any rating when judged against the expectations of their own role scope.",
      "Ask whether the person exceeded expectations for their level, not whether they had the largest absolute scope.",
    ],
  },
  {
    title: "Challenge bias before finalising",
    items: [
      "Check for recency, halo, horns, visibility, similarity, style, leniency, and severity bias.",
      "Ask whether another employee with similar evidence would receive the same rating.",
      "Avoid holding people to different standards or rating factors outside their control.",
    ],
  },
  {
    title: "Use comparable evidence",
    items: [
      "Review role expectations, objectives, and success measures before choosing the rating.",
      "Use similar evidence types across employees in comparable roles so calibration discussions are balanced.",
      "Bring examples from multiple points in the review period and include direct stakeholder input where relevant.",
    ],
  },
  {
    title: "Document the judgement",
    items: [
      "Record the rating rationale in plain language: what happened, when it happened, why it mattered, and how it maps to the anchor.",
      "If calibration changes a rating, capture the reason for the change and the evidence that supported it.",
      "Translate the final rating into useful feedback, development actions, and expectations for the next cycle.",
    ],
  },
];

const positiveEvidence = [
  "Role expectations, objectives, and success measures agreed for the level.",
  "Delivered outcomes, project results, and measurable business impact.",
  "Quality, timeliness, reliability, rework, risk, or operational indicators.",
  "Customer, stakeholder, peer, or cross-functional feedback from people with direct visibility.",
  "Specific examples across the review period with context, timing, actions, and impact.",
  "Evidence of independence, judgement, prioritisation, resilience, and decision quality.",
  "Behavioural examples linked to the relevant driver and Omada values.",
  "Process, tooling, knowledge-sharing, or collaboration improvements that changed how work gets done.",
  "Calibration notes comparing similar evidence against the same role-level standard.",
];

const avoidEvidence = [
  "Personality, confidence, communication style, or personal preference alone.",
  "Visibility to leadership, proximity to the manager, or relationship strength.",
  "Recent events only, one highly visible project, or a single isolated incident.",
  "Perceived effort, long hours, or busyness without role-relevant outcomes.",
  "Rumour, vague impressions, or feedback from people without direct visibility.",
  "Different standards for different people in similar roles.",
  "Factors outside the employee's control, especially where expectations changed or were unclear.",
  "Protected characteristics, personal circumstances, or assumptions unrelated to performance.",
];

const tabs = document.querySelector(".driver-tabs");
const panel = document.querySelector(".driver-panel");
const scaleGrid = document.querySelector(".scale-grid");
const guidanceGrid = document.querySelector(".guidance-grid");
const positiveList = document.querySelector("#positive-evidence");
const avoidList = document.querySelector("#avoid-evidence");

function listItems(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function renderDriver(index) {
  const driver = drivers[index];

  document.querySelectorAll(".driver-tab").forEach((tab, tabIndex) => {
    tab.setAttribute("aria-selected", tabIndex === index ? "true" : "false");
    tab.setAttribute("tabindex", tabIndex === index ? "0" : "-1");
  });

  panel.setAttribute("aria-labelledby", `driver-tab-${index}`);

  panel.innerHTML = `
    <div class="driver-header">
      <div>
        <p class="eyebrow">Driver ${index + 1}</p>
        <h3>${driver.name}</h3>
        <p>${driver.description}</p>
      </div>
      <span class="driver-badge">Score 1-5</span>
    </div>
    <div class="panel-grid">
      <div class="question-block">
        <h4>Universal calibration questions</h4>
        <ol class="question-list">
          ${driver.questions.map((question) => `<li>${question}</li>`).join("")}
        </ol>
      </div>
      <div class="anchors-block">
        <h4>Rating anchors</h4>
        <div class="anchor-list">
          ${ratings
            .map((rating) => {
              const anchor = driver.anchors[rating.score];
              const summary = anchorSummaries[driver.name]?.[rating.score] ?? rating.summary;
              const isOpen = rating.score === 3 ? " open" : "";
              return `
                <article class="anchor-item${isOpen}" data-rating="${rating.score}">
                  <button class="anchor-toggle" type="button" aria-expanded="${rating.score === 3}">
                    <strong>
                      <span class="anchor-number">${rating.score}</span>
                      ${rating.label}
                    </strong>
                    <svg class="anchor-chevron" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </button>
                  <div class="anchor-content">
                    <p class="anchor-summary">${summary}</p>
                    <div>
                      <h5>Ask</h5>
                      <ul>${listItems(anchor.ask)}</ul>
                    </div>
                    <div>
                      <h5>Evidence indicators</h5>
                      <ul>${listItems(anchor.evidence)}</ul>
                    </div>
                  </div>
                </article>
              `;
            })
            .join("")}
        </div>
      </div>
    </div>
  `;

  panel.querySelectorAll(".anchor-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".anchor-item");
      const isOpen = item.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });
}

function renderTabs() {
  tabs.innerHTML = drivers
    .map(
      (driver, index) => `
        <button
          id="driver-tab-${index}"
          class="driver-tab"
          type="button"
          role="tab"
          aria-selected="${index === 0}"
          aria-controls="driver-panel"
          tabindex="${index === 0 ? "0" : "-1"}"
          data-driver="${index}"
        >
          <span class="driver-tab-number">${index + 1}</span>
          <span>
            <strong>${driver.name}</strong>
            <small>${driver.description.split(",")[0]}</small>
          </span>
        </button>
      `,
    )
    .join("");

  tabs.querySelectorAll(".driver-tab").forEach((button) => {
    button.addEventListener("click", () => {
      renderDriver(Number(button.dataset.driver));
    });

    button.addEventListener("keydown", (event) => {
      const currentIndex = Number(button.dataset.driver);
      const lastIndex = drivers.length - 1;
      let nextIndex = currentIndex;

      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        nextIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
      } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        nextIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
      } else if (event.key === "Home") {
        nextIndex = 0;
      } else if (event.key === "End") {
        nextIndex = lastIndex;
      } else {
        return;
      }

      event.preventDefault();
      renderDriver(nextIndex);
      document.querySelector(`#driver-tab-${nextIndex}`).focus();
    });
  });
}

function renderScale() {
  scaleGrid.innerHTML = ratings
    .map(
      (rating) => `
        <article class="scale-card" data-rating="${rating.score}">
          <span class="scale-number">${rating.score}</span>
          <h3>${rating.label}</h3>
          <p>${rating.summary}</p>
        </article>
      `,
    )
    .join("");
}

function renderGuidance() {
  guidanceGrid.innerHTML = guidance
    .map(
      (card) => `
        <article class="guidance-card">
          <h3>${card.title}</h3>
          <ul>${listItems(card.items)}</ul>
        </article>
      `,
    )
    .join("");
}

function renderEvidence() {
  positiveList.innerHTML = listItems(positiveEvidence);
  avoidList.innerHTML = listItems(avoidEvidence);
}

renderTabs();
renderDriver(0);
renderScale();
renderGuidance();
renderEvidence();
