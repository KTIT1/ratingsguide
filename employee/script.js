const ratings = [
  {
    score: 1,
    label: "Significant Improvement Needed",
    summary:
      "I frequently struggled to meet expectations and required substantial support or intervention.",
  },
  {
    score: 2,
    label: "Needs Development",
    summary:
      "I met some expectations but inconsistently delivered results or required support in important areas.",
  },
  {
    score: 3,
    label: "Strong Performance",
    summary:
      "I consistently met expectations for my role and delivered reliable results.",
  },
  {
    score: 4,
    label: "Strong Stretch Performance",
    summary:
      "I frequently exceeded expectations through stronger execution, initiative, or broader influence.",
  },
  {
    score: 5,
    label: "Exceptional Performance",
    summary:
      "I delivered sustained, role-defining impact that significantly elevated outcomes for the team or business.",
  },
];

const drivers = [
  {
    name: "Impact",
    description:
      "Results, delivery quality, prioritisation, and measurable impact on customers, colleagues, processes, revenue, risk, or business outcomes.",
    questions: [
      "What outcomes was I expected to deliver, and how consistently did I deliver them?",
      "What evidence shows the quality, timeliness, and reliability of my work?",
      "How did my work create value for customers, colleagues, my team, or the business?",
      "How well did I prioritise competing work and manage commitments?",
      "Where did I need rework, support, escalation, or recovery?",
      "Did I deliver impact beyond normal expectations, and was that impact sustained?",
    ],
    anchors: {
      1: "I regularly missed agreed goals or deadlines. My output often fell below expected standards and required significant rework or support.",
      2: "I sometimes met expectations, but my quality, prioritisation, or timeliness were inconsistent. My impact varied across responsibilities.",
      3: "I consistently delivered expected outcomes with the required quality and timeliness for my role. My work produced reliable and measurable results aligned to team and stakeholder needs.",
      4: "I frequently exceeded expectations through stronger execution, improved efficiency, higher quality, or broader influence within my area.",
      5: "I consistently delivered exceptional, sustained impact that materially improved team, customer, or business outcomes and raised the standard for others at my level.",
    },
    evidence: [
      "Goals or commitments delivered.",
      "Metrics, project outcomes, customer impact, or operational results.",
      "Examples of quality, timeliness, prioritisation, or reliability.",
      "Examples where your work changed an outcome beyond the expected baseline.",
    ],
  },
  {
    name: "Ownership",
    description:
      "Accountability, initiative, follow-through, resilience, and maintaining momentum on priorities.",
    questions: [
      "Where did I take responsibility for outcomes, not just assigned tasks?",
      "How reliably did I follow through on commitments?",
      "How did I identify risks, blockers, or opportunities early?",
      "How did I keep momentum when work became ambiguous, difficult, or changing?",
      "Where did I need direction, reminders, or support to maintain progress?",
      "Did my ownership improve how work was delivered for others?",
    ],
    anchors: {
      1: "I often avoided responsibility or relied heavily on direction to progress work. I struggled to maintain momentum independently.",
      2: "I took ownership inconsistently and sometimes needed reminders, direction, or additional support to maintain progress.",
      3: "I took clear ownership of my work and commitments. I followed through reliably, managed priorities appropriately, and addressed challenges constructively.",
      4: "I proactively identified and addressed problems or opportunities, remained resilient through ambiguity, and independently drove work to resolution.",
      5: "I consistently improved how work was delivered, demonstrated exceptional reliability in complex situations, and positively influenced others through strong ownership and follow-through.",
    },
    evidence: [
      "Commitments you owned from start to finish.",
      "Risks, blockers, or issues you surfaced early.",
      "Examples of initiative, resilience, or follow-through.",
      "Improvements you made to how work was planned, tracked, or delivered.",
    ],
  },
  {
    name: "Expertise",
    description:
      "Role-relevant technical or functional competence, problem-solving, applied knowledge, and use of relevant tools and methods.",
    questions: [
      "How did I apply the technical or functional skills expected for my role?",
      "What problems did I solve independently, and where did I need support?",
      "How did I handle routine, moderately complex, or unfamiliar work?",
      "What judgement did I apply when choosing tools, methods, or solutions?",
      "How did I share knowledge or improve standards, systems, or practices?",
      "How has my expertise grown during the review period?",
    ],
    anchors: {
      1: "I struggled with core responsibilities and frequently required significant support to complete routine work.",
      2: "I demonstrated developing capability but still required support for standard or moderately complex work. My application of knowledge was sometimes inconsistent.",
      3: "I demonstrated solid role-appropriate expertise, sound judgement, and effective problem-solving. I independently handled routine and moderately complex work.",
      4: "I demonstrated strong expertise, solved complex problems effectively, and contributed improvements, standards, or reusable approaches that increased team effectiveness.",
      5: "I demonstrated deep and highly reliable expertise, applied strong judgement in unfamiliar or complex situations, and contributed knowledge or improvements that significantly strengthened broader team capability.",
    },
    evidence: [
      "Problems you solved and the methods you used.",
      "Work you completed independently or with reduced support.",
      "Examples of judgement, technical quality, or functional depth.",
      "Knowledge sharing, reusable assets, standards, or improvements you contributed.",
    ],
  },
  {
    name: "Collaboration",
    description:
      "Cross-functional teamwork, constructive communication, conflict handling, influence without authority, and enabling others.",
    questions: [
      "How did I work constructively with colleagues and stakeholders?",
      "How did I communicate context, risks, decisions, or changes?",
      "How did I handle disagreement, tension, or competing priorities?",
      "Where did I help align people around shared outcomes?",
      "How did I build trust or maintain constructive working relationships?",
      "Did my collaboration improve outcomes beyond my own work?",
    ],
    anchors: {
      1: "I frequently struggled to collaborate effectively, communicate clearly, or maintain constructive working relationships.",
      2: "I collaborated inconsistently across stakeholders. My communication or follow-through sometimes lacked clarity or alignment.",
      3: "I worked constructively and respectfully with colleagues and stakeholders. I communicated effectively, contributed positively to shared goals, and handled disagreements professionally.",
      4: "I built strong working relationships across stakeholders, proactively shared context, aligned people toward outcomes, and navigated tension constructively to maintain trust and momentum.",
      5: "I acted as a catalyst for collaboration across teams or functions. I built high-trust partnerships that enabled stronger collective outcomes, alignment, and problem-solving.",
    },
    evidence: [
      "Stakeholder feedback or examples of effective partnership.",
      "Shared outcomes you helped deliver with others.",
      "Examples of clear communication, alignment, or conflict handling.",
      "Situations where your collaboration improved team or cross-functional results.",
    ],
  },
  {
    name: "Growth",
    description:
      "Learning agility, adaptability, openness to feedback, and development of capabilities relevant to evolving role or business needs.",
    questions: [
      "What feedback did I receive, and how did I apply it?",
      "How did I adapt to changing priorities, tools, or ways of working?",
      "What new skills or capabilities did I build?",
      "Where did I repeat old patterns or make slower progress than expected?",
      "How did my learning improve my performance or the team's work?",
      "How did I help others learn, adapt, or improve?",
    ],
    anchors: {
      1: "I resisted feedback or change, repeated similar mistakes, or showed limited progress in development areas despite support.",
      2: "I accepted feedback but applied it inconsistently. I adapted slowly to changing priorities, tools, or ways of working.",
      3: "I remained open to feedback and learning. I applied lessons learned, adapted to changing priorities with appropriate support, and actively developed relevant capabilities.",
      4: "I demonstrated strong learning agility by seeking feedback, adapting effectively to change or ambiguity, and building skills aligned to evolving team or business needs.",
      5: "I demonstrated exceptional learning agility, anticipated future capability needs, proactively developed expertise that benefited the broader organisation, and helped others improve and adapt.",
    },
    evidence: [
      "Feedback you acted on and what changed afterwards.",
      "New skills, tools, methods, or capabilities you developed.",
      "Examples of adapting to ambiguity, change, or shifting priorities.",
      "Ways you helped others learn or adopt improved ways of working.",
    ],
  },
  {
    name: "Integrity",
    description:
      "Acts with integrity, sound judgement, and respect, building trust and acting in line with Omada's values.",
    questions: [
      "How did I act with honesty, professionalism, and respect?",
      "Where did I demonstrate sound judgement under pressure or ambiguity?",
      "How did I handle confidentiality, sensitive information, or trust-sensitive situations?",
      "How did I take accountability for mistakes, risks, or difficult decisions?",
      "How did my behaviour align with Omada values and expectations?",
      "Where did I reinforce trust, transparency, or values-led behaviour for others?",
    ],
    anchors: {
      1: "My behaviour or judgment negatively impacted trust, reliability, or alignment with expected standards or values.",
      2: "I generally intended to act appropriately but demonstrated inconsistent judgement, transparency, reliability, or alignment with expected values and standards.",
      3: "I acted with honesty, consistency, sound judgement, and professionalism. I was dependable, respected confidentiality, and behaved in line with company values and expectations.",
      4: "I consistently demonstrated strong judgement, trustworthiness, and values-based behaviour. I was relied upon in sensitive, complex, or ambiguous situations.",
      5: "I set a strong example of integrity and principled decision-making. I reinforced trust, accountability, transparency, and values-led behaviour across others.",
    },
    evidence: [
      "Examples of sound judgement, professionalism, and accountability.",
      "Situations where you protected trust, confidentiality, or transparency.",
      "Examples of respectful behaviour under pressure or disagreement.",
      "Ways you reinforced Omada values through decisions or actions.",
    ],
  },
];

const guidance = [
  {
    title: "Write in first person with evidence",
    items: [
      "Use clear statements such as: I delivered, I improved, I learned, I influenced, or I needed support.",
      "Pair each statement with a concrete example, outcome, or observable behaviour.",
      "Avoid broad claims that are not connected to evidence.",
    ],
  },
  {
    title: "Be balanced and specific",
    items: [
      "Include strengths, impact, learning, and development areas.",
      "Explain the context if goals shifted, priorities changed, or constraints affected delivery.",
      "Name what you would repeat, improve, or do differently next time.",
    ],
  },
  {
    title: "Use 3 as a strong anchor",
    items: [
      "A 3 is not average. It means you consistently met expectations for your role.",
      "Only choose 4 when your evidence shows sustained stretch beyond expected performance.",
      "Only choose 5 when your contribution was exceptional, role-defining, and broader than isolated wins.",
    ],
  },
  {
    title: "Connect evidence to the driver",
    items: [
      "For each driver, choose examples that directly show that driver in action.",
      "Separate effort from impact by explaining what changed because of your work.",
      "Use stakeholder input where it adds direct evidence, not just praise.",
    ],
  },
  {
    title: "Prepare for the conversation",
    items: [
      "Bring examples you want your manager to consider.",
      "Highlight any areas where you and your manager may have different visibility.",
      "Use the discussion to align on expectations, development goals, and next-cycle priorities.",
    ],
  },
  {
    title: "Avoid self-assessment traps",
    items: [
      "Do not underrate sustained strong performance because 3 feels too low.",
      "Do not overrate based on one visible project, a difficult period, or effort alone.",
      "Do not ignore gaps. Clear reflection on development areas makes the assessment stronger.",
    ],
  },
];

const positiveEvidence = [
  "Delivered goals, commitments, project outcomes, or operational results.",
  "Metrics, quality indicators, customer impact, risk reduction, or process improvements.",
  "Stakeholder, customer, peer, or cross-functional feedback with direct visibility.",
  "Examples of judgement, independence, prioritisation, or resilience.",
  "Specific examples across the review period with situation, action, result, and impact.",
  "Learning, feedback applied, skills developed, or new ways of working adopted.",
  "Ways you enabled others, improved collaboration, or strengthened team effectiveness.",
  "Examples linked clearly to your role expectations and the relevant performance driver.",
];

const avoidEvidence = [
  "Only listing tasks without explaining outcomes or impact.",
  "Relying only on effort, hours worked, or how busy the period felt.",
  "Using one recent or highly visible example as the whole assessment.",
  "Vague statements such as I did well or I was helpful without examples.",
  "Ignoring missed expectations, support needed, or development areas.",
  "Comparing yourself to others without connecting back to your own role expectations.",
  "Feedback from people who did not directly observe the work.",
  "Personality, confidence, communication style, or assumptions unrelated to performance.",
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
      <span class="driver-badge">Rate 1-5</span>
    </div>
    <div class="panel-grid">
      <div class="question-block">
        <h4>Self-reflection questions</h4>
        <ol class="question-list">
          ${driver.questions.map((question) => `<li>${question}</li>`).join("")}
        </ol>
      </div>
      <div class="anchors-block">
        <h4>First-person rating anchors</h4>
        <div class="anchor-list">
          ${ratings
            .map((rating) => {
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
                    <p class="anchor-summary">${driver.anchors[rating.score]}</p>
                    <div>
                      <h5>Evidence to prepare</h5>
                      <ul>${listItems(driver.evidence)}</ul>
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
