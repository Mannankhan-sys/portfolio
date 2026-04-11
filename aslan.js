// Initialize Lucide icons
lucide.createIcons();

// Project data
const projects = [
    {
        title: "Automatic Temperature Regulator",
        description: "A smart device that automatically manages heaters and fans based on real-time temperature, enhancing comfort and efficiency.",
        category: "electrical",
        tags: ["Automation", "Power Electronics", "Embedded C++"],
        icon: "thermometer",
        hasDemo: false,
        hasRepo: true,
        repoUrl: "https://github.com/0ASLAN-dev0/AutomaticTemperatrueRegulator"
    },
    {
        title: "SimBio-tic",
        description: "SimBio-tic is a simulation where agents with unique personalities interact, adapt, and reproduce in a 2D environment. Each agent is powered by a neural network, making decisions based on its surroundings. Over time, agents evolve through natural selection, mutation, and energy-based survival mechanics.",
        category: "software",
        tags: ["Python", "Artificial Intelligence", "Machine Learning"],
        icon: "worm",
        hasDemo: false,
        hasRepo: true,
        repoUrl: "https://github.com/0ASLAN-dev0/SimBio-tic"
    },
    {
        title: "Procedural Terrain Generation",
        description: "A lightweight engine that generates infinite, deterministic terrain from a single seed value, streaming chunks on demand and discarding out-of-range data to keep memory lean.",
        category: "roblox",
        tags: ["Procedural", "World Gen", "Optimised Terrain"],
        icon: "mountain",
        hasDemo: true,
        hasRepo: false,
        demoUrl: "https://drive.google.com/file/d/1ZBve5HfyBKbS0x1sg7Wa9g3zp3cr_UZF/view?usp=sharing"
    },
    {
        title: "Secure Vault",
        description: "A secure vault featuring an interactive screen keypad that unlocks only with the correct password. Equipped with a robust alert system to protect against brute force attacks, ensuring optimal security.",
        category: "electrical",
        tags: ["Security", "Safety", "Embedded C++"],
        icon: "lock",
        hasDemo: false,
        hasRepo: true,
        repoUrl: "https://github.com/0ASLAN-dev0/SecureVault"
    },
    {
        title: "Projectile Motion Visualizer",
        description: "A drag-to-shoot projectile simulator with real-time trajectory preview, air drag, and RK4 physics. Built with Python & Pygame.",
        category: "software",
        tags: ["Simulation", "Physics", "Projectile Motion"],
        icon: "brain-circuit",
        hasDemo: false,
        hasRepo: true,
        repoUrl: "https://github.com/0ASLAN-dev0/ProjectileMotion"
    },
    {
        title: "Procedural Dungeon Generation",
        description: "A seed-driven dungeon generator that procedurally constructs layouts, intelligently differentiating between open rooms and connecting hallways for varied, replayable environments.",
        category: "roblox",
        tags: ["Procedural", "Structure Gen", "Dungeons"],
        icon: "vector-square",
        hasDemo: true,
        hasRepo: false,
        demoUrl: "https://drive.google.com/file/d/1ZBve5HfyBKbS0x1sg7Wa9g3zp3cr_UZF/view?usp=sharing",
    },
    {
        title: "Power Saver",
        description: "A smart device that automatically turns on/off the lights and air conditioners in a room based on if its empty or not.",
        category: "electrical",
        tags: ["Electricity optimization", "Automation", "Efficiency"],
        icon: "battery-full",
        hasDemo: false,
        hasRepo: true,
        repoUrl: "https://github.com/0ASLAN-dev0/PowerSaver"
    },
    {
        title: "Vitaxia Development",
        description: "The official website of Vitaxia Development, showcasing my web development expertise.",
        category: "software",
        tags: ["Web Development", "Business", "Expertise"],
        icon: "chevrons-left-right-ellipsis",
        hasDemo: true,
        hasRepo: false,
        demoUrl: "https://vitaxia.netlify.app",
    },
    {
        title: "Other Roblox projects",
        description: "A google drive link to videos of all of my other roblox systems worth mentioning",
        category: "roblox",
        tags: ["Extra", "Roblox", "Projects"],
        icon: "book-heart",
        hasDemo: true,
        hasRepo: false,
        demoUrl: "https://drive.google.com/drive/folders/1LgCxY4cT8Aol-DoZpJGnjyLy6wYHOljv?usp=sharing"
    }
];

// Skills data
const electricalSkills = [
    { name: "PCB Design & Layout", level: "Expert", percentage: 95, description: "Altium Designer, KiCad, Eagle" },
    { name: "Embedded Systems", level: "Advanced", percentage: 90, description: "ATmega, PIC, Arduino, ESP32" },
    { name: "FPGA Development", level: "Advanced", percentage: 85, description: "VHDL, Verilog, Xilinx, Intel" },
    { name: "Power Electronics", level: "Proficient", percentage: 80, description: "DC/DC Converters, Motor Drives" }
];

const softwareSkills = [
    { name: "Frontend Development", level: "Expert", percentage: 95, description: "HTML, CSS, JavaScript" },
    { name: "Backend Development", level: "Advanced", percentage: 90, description: "Node.js, Python, C++, Luau" },
    { name: "Machine Learning", level: "Proficient", percentage: 80, description: "TensorFlow, PyTorch, Scikit-learn" },
    { name: "Full-Stack Development", level: "Advanced", percentage: 85, description: "Python, JavaScript, C++, Luau" }
];

const robloxSkills = [
    { name: "Luau Scripting", level: "Expert", percentage: 95, description: "OOP, Modulescripts, Bindables" },
    { name: "Game Design", level: "Advanced", percentage: 88, description: "Mechanics, Balancing, UX" },
    { name: "Roblox Studio", level: "Expert", percentage: 92, description: "Terrain, Lighting, Physics" },
    { name: "AI & Simulation", level: "Proficient", percentage: 80, description: "Pathfinding, NPC Behaviour" }
];

// Tools data
const tools = [
    { name: "HTML/CSS", color: "#00D9FF", symbol: "🌐" },
    { name: "Microcontrollers", color: "#00FF88", symbol: "⚙" },
    { name: "Python", color: "#00FF88", symbol: "🐍" },
    { name: "Roblox", color: "#00FFFF", symbol: "🧱" },
    { name: "C++", color: "#00D9FF", symbol: "🔧" },
    { name: "Luau", color: "#00FF88", symbol: "🎮" },
    { name: "Sensors", color: "#00FF88", symbol: "🎛" },
    { name: "Git", color: "#00FFFF", symbol: "📋" }
];

// Configuration
const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1386284407614079006/vEvDYyzINqI8syivFs4GfUp_qHAodz5ZAlM1bH7ysP96VWyppHA4Rknna31KjnMYz0Vv';

// DOM elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const projectsGrid = document.getElementById('projectsGrid');
const electricalSkillsList = document.getElementById('electricalSkills');
const softwareSkillsList = document.getElementById('softwareSkills');
const robloxSkillsList = document.getElementById('robloxSkills');
const toolsGrid = document.getElementById('toolsGrid');
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');

// State
let currentFilter = 'all';

// Initialize the application
document.addEventListener('DOMContentLoaded', function () {
    initializeNavigation();
    initializePCBInteractions();
    renderProjects();
    renderSkills();
    renderTools();
    initializeContactForm();
    initializeScrollAnimations();
    initializeInteractiveBackground();

    // Re-initialize Lucide icons after dynamic content is added
    lucide.createIcons();
});

// Navigation functionality
function initializeNavigation() {
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                mobileMenu.classList.remove('active');
            }
        });
    });
}

// PCB Background interactions
function initializePCBInteractions() {
    const circuitNodes = document.querySelectorAll('.circuit-node');

    circuitNodes.forEach(node => {
        node.addEventListener('mouseenter', function () {
            // Create ripple effect
            const ripple = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            const cx = this.getAttribute('cx');
            const cy = this.getAttribute('cy');

            ripple.setAttribute('cx', cx);
            ripple.setAttribute('cy', cy);
            ripple.setAttribute('r', '0');
            ripple.setAttribute('fill', 'none');
            ripple.setAttribute('stroke', '#00FF88');
            ripple.setAttribute('stroke-width', '2');
            ripple.setAttribute('opacity', '1');

            // Add ripple to SVG
            this.parentNode.appendChild(ripple);

            // Animate ripple
            let radius = 0;
            const maxRadius = 30;
            const animate = () => {
                radius += 2;
                ripple.setAttribute('r', radius);
                ripple.setAttribute('opacity', 1 - (radius / maxRadius));

                if (radius < maxRadius) {
                    requestAnimationFrame(animate);
                } else {
                    ripple.remove();
                }
            };
            requestAnimationFrame(animate);

            // Speed up circuit traces
            const traces = document.querySelectorAll('.circuit-trace');
            traces.forEach(trace => {
                trace.style.animationDuration = '2s';
            });
        });

        node.addEventListener('mouseleave', function () {
            // Reset circuit trace speed
            const traces = document.querySelectorAll('.circuit-trace');
            traces.forEach(trace => {
                trace.style.animationDuration = '6s';
            });
        });
    });
}

// Project rendering and filtering
function renderProjects() {
    const filteredProjects = currentFilter === 'all'
        ? projects
        : projects.filter(project => project.category === currentFilter);

    projectsGrid.innerHTML = '';

    filteredProjects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });


    // Re-initialize Lucide icons after DOM update
    lucide.createIcons();

    // Initialize project filters
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            // Update active filter
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Update current filter and re-render
            currentFilter = this.dataset.filter;
            renderProjects();
        });
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = `project-card glass-card ${project.category}`;

    const iconDiv = document.createElement('div');
    iconDiv.className = `project-icon ${project.category}`;
    iconDiv.innerHTML = `<i data-lucide="${project.icon}"></i>`;

    const title = document.createElement('h3');
    title.className = 'project-title';
    title.textContent = project.title;

    const description = document.createElement('p');
    description.className = 'project-description';
    description.textContent = project.description;

    const tagsContainer = document.createElement('div');
    tagsContainer.className = 'project-tags';

    project.tags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.className = `project-tag ${project.category}`;
        tagSpan.textContent = tag;
        tagsContainer.appendChild(tagSpan);
    });

    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'project-actions';

    const demoLink = document.createElement('a');
    demoLink.className = `project-link ${project.hasDemo === false ? 'disabled-link' : ''}`;
    if (project.hasDemo !== false) {
        demoLink.href = project.demoUrl || '#';
        demoLink.target = '_blank';
    }
    demoLink.innerHTML = `
        <i data-lucide="external-link"></i>
        ${project.hasDemo !== false ? 'Demo' : 'Demo'}
    `;

    const repoLink = document.createElement('a');
    repoLink.className = `project-link ${project.hasRepo ? '' : 'disabled-link'}`;
    if (project.hasRepo) {
        repoLink.href = project.repoUrl || '#';
        repoLink.target = '_blank';
    }
    repoLink.innerHTML = `
        <i data-lucide="folder-code"></i>
        Source Code
    `;

    actionsDiv.appendChild(demoLink);
    actionsDiv.appendChild(repoLink);

    card.appendChild(iconDiv);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(tagsContainer);
    card.appendChild(actionsDiv);

    return card;
}

// Skills rendering
function renderSkills() {
    renderSkillCategory(electricalSkills, electricalSkillsList, 'electrical');
    renderSkillCategory(softwareSkills, softwareSkillsList, 'software');
    renderSkillCategory(robloxSkills, robloxSkillsList, 'roblox');
}

function renderSkillCategory(skills, container, category) {
    container.innerHTML = '';

    skills.forEach((skill, index) => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';

        const skillHeader = document.createElement('div');
        skillHeader.className = 'skill-header';

        const skillName = document.createElement('span');
        skillName.className = 'skill-name';
        skillName.textContent = skill.name;

        const skillLevel = document.createElement('span');
        skillLevel.className = `skill-level ${category}`;
        skillLevel.textContent = skill.level;

        skillHeader.appendChild(skillName);
        skillHeader.appendChild(skillLevel);

        const skillBar = document.createElement('div');
        skillBar.className = 'skill-bar';

        const skillProgress = document.createElement('div');
        skillProgress.className = `skill-progress ${category}`;

        const skillDescription = document.createElement('div');
        skillDescription.className = 'skill-description';
        skillDescription.textContent = skill.description;

        skillBar.appendChild(skillProgress);
        skillItem.appendChild(skillHeader);
        skillItem.appendChild(skillBar);
        skillItem.appendChild(skillDescription);

        container.appendChild(skillItem);

        // Animate skill bar on scroll
        setTimeout(() => {
            skillProgress.style.width = `${skill.percentage}%`;
        }, index * 200);
    });
}

// Tools rendering
function renderTools() {
    toolsGrid.innerHTML = '';

    tools.forEach(tool => {
        const toolItem = document.createElement('div');
        toolItem.className = 'tool-item';

        const toolIcon = document.createElement('div');
        toolIcon.className = 'tool-icon';
        toolIcon.style.color = tool.color;
        toolIcon.textContent = tool.symbol;

        const toolName = document.createElement('span');
        toolName.className = 'tool-name';
        toolName.textContent = tool.name;

        toolItem.appendChild(toolIcon);
        toolItem.appendChild(toolName);
        toolsGrid.appendChild(toolItem);
    });
}

// Contact form functionality
function initializeContactForm() {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(this);
        const data = Object.fromEntries(formData);

        // Validate form
        if (!validateForm(data)) {
            return;
        }

        // Show loading state
        const submitBtn = this.querySelector('.btn-submit');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');

        btnText.style.display = 'none';
        btnLoading.style.display = 'flex';
        submitBtn.disabled = true;

        // Send to Discord webhook
        sendToDiscord(data)
            .then(() => {
                // Reset form
                this.reset();

                // Reset button state
                btnText.style.display = 'flex';
                btnLoading.style.display = 'none';
                submitBtn.disabled = false;

                // Show success message
                showToast('Message sent successfully! I\'ll get back to you soon.');
            })
            .catch((error) => {
                console.error('Error sending message:', error);

                // Reset button state
                btnText.style.display = 'flex';
                btnLoading.style.display = 'none';
                submitBtn.disabled = false;

                // Show error message
                showToast('Failed to send message. Please try again.', 'error');
            });
    });
}

function validateForm(data) {
    const required = ['name', 'email', 'subject', 'message'];

    for (let field of required) {
        if (!data[field] || data[field].trim() === '') {
            showToast(`Please fill in the ${field} field.`, 'error');
            return false;
        }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showToast('Please enter a valid email address.', 'error');
        return false;
    }

    return true;
}

// Discord webhook integration
async function sendToDiscord(formData) {
    // Check if webhook URL is configured
    if (!DISCORD_WEBHOOK_URL || DISCORD_WEBHOOK_URL === '') {
        throw new Error('Discord webhook URL not configured');
    }

    // Create formatted message for Discord
    const embed = {
        title: "🔧 New Portfolio Contact Form Submission",
        color: 0x00D9FF, // Electric blue color
        fields: [
            {
                name: "👤 Name",
                value: formData.name,
                inline: true
            },
            {
                name: "📧 Email",
                value: formData.email,
                inline: true
            },
            {
                name: "📋 Subject",
                value: formData.subject,
                inline: true
            },
            {
                name: "💬 Message",
                value: formData.message,
                inline: false
            }
        ],
        timestamp: new Date().toISOString(),
        footer: {
            text: "Aslan Dev Portfolio",
            icon_url: "https://aslandev.netlify.app/aslan.webp"
        },
        thumbnail: {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsFOKkMrqZ4inEQgHoXtfgmVCiNAGA57Sl-w&s"
        }
    };

    const payload = {
        username: "Portfolio Bot",
        avatar_url: "https://png.pngtree.com/png-vector/20190228/ourmid/pngtree-vector-portfolio-icon-png-image_711172.jpg",
        embeds: [embed]
    };

    try {
        const response = await fetch(DISCORD_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`Discord webhook failed: ${response.status}`);
        }

        return response;
    } catch (error) {
        console.error('Discord webhook error:', error);
        throw error;
    }
}

// Toast notifications
function showToast(message, type = 'success') {
    const toastMessage = toast.querySelector('.toast-message');
    const toastIcon = toast.querySelector('.toast-icon');

    toastMessage.textContent = message;

    if (type === 'error') {
        toastIcon.innerHTML = '<i data-lucide="x-circle"></i>';
        toast.style.borderColor = 'rgba(239, 68, 68, 0.3)';
    } else {
        toastIcon.innerHTML = '<i data-lucide="check-circle"></i>';
        toast.style.borderColor = 'rgba(0, 217, 255, 0.3)';
    }

    // Re-initialize icons
    lucide.createIcons();

    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

// Scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';

                // Trigger skill bar animations
                if (entry.target.classList.contains('skills-category')) {
                    const skillBars = entry.target.querySelectorAll('.skill-progress');
                    skillBars.forEach((bar, index) => {
                        const percentage = bar.parentNode.parentNode.dataset.percentage ||
                            parseInt(bar.style.width) || 0;
                        setTimeout(() => {
                            bar.style.width = bar.style.width || '0%';
                        }, index * 200);
                    });
                }
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    document.querySelectorAll('.glass-card, .section-header').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Utility functions
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add some interactive effects for nodes
function createPulseEffect(x, y) {
    const svg = document.querySelector('.pcb-svg');
    const pulse = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

    pulse.setAttribute('cx', x);
    pulse.setAttribute('cy', y);
    pulse.setAttribute('r', '4');
    pulse.setAttribute('fill', '#00FF88');
    pulse.setAttribute('opacity', '0.8');
    pulse.style.filter = 'url(#glow)';

    svg.appendChild(pulse);

    // Animate pulse along random path
    const paths = [
        `M${x} ${y} L${x + 400} ${y} L${x + 400} ${y + 200}`,
        `M${x} ${y} L${x - 400} ${y} L${x - 400} ${y - 200}`,
        `M${x} ${y} L${x} ${y + 300} L${x + 300} ${y + 300}`,
        `M${x} ${y} L${x} ${y - 300} L${x - 300} ${y - 300}`
    ];

    const randomPath = paths[Math.floor(Math.random() * paths.length)];

    // Create motion path
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', randomPath);
    path.setAttribute('id', `pulse-path-${Date.now()}`);
    path.style.display = 'none';
    svg.appendChild(path);

    // Animate motion
    const animateMotion = document.createElementNS('http://www.w3.org/2000/svg', 'animateMotion');
    animateMotion.setAttribute('dur', '3s');
    animateMotion.setAttribute('repeatCount', '1');

    const mpath = document.createElementNS('http://www.w3.org/2000/svg', 'mpath');
    mpath.setAttribute('href', `#${path.id}`);
    animateMotion.appendChild(mpath);
    pulse.appendChild(animateMotion);

    // Remove elements after animation
    setTimeout(() => {
        pulse.remove();
        path.remove();
    }, 3000);
}

// Periodically create random pulse effects
setInterval(() => {
    const nodes = [
        { x: 400, y: 480 },
        { x: 960, y: 320 },
        { x: 1520, y: 480 },
        { x: 600, y: 320 },
        { x: 1320, y: 320 }
    ];

    const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
    createPulseEffect(randomNode.x, randomNode.y);
}, 4000);

// Interactive Particle Background
function initializeInteractiveBackground() {
    const canvas = document.createElement('canvas');
    canvas.id = 'bgCanvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none';
    document.body.prepend(canvas);

    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    const mouse = { x: null, y: null, radius: 150 };

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
    });

    window.addEventListener('resize', resizeCanvas);

    function resizeCanvas() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        initParticles();
    }

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 1.5 + 0.5;
            this.vx = (Math.random() - 0.5) * 0.8;
            this.vy = (Math.random() - 0.5) * 0.8;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off edges
            if (this.x < 0 || this.x > width) this.vx = -this.vx;
            if (this.y < 0 || this.y > height) this.vy = -this.vy;

            // Mouse interaction: slight repel
            if (mouse.x && mouse.y) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distanceSq = dx * dx + dy * dy;
                if (distanceSq < mouse.radius * mouse.radius) {
                    let distance = Math.sqrt(distanceSq);
                    let force = (mouse.radius - distance) / mouse.radius;
                    this.x -= (dx / distance) * force * 1.5;
                    this.y -= (dy / distance) * force * 1.5;
                }
            }
        }

        draw() {
            ctx.fillStyle = 'rgba(0, 217, 255, 0.5)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        // Adjust particle count based on screen size (prevent lag)
        let numberOfParticles = Math.min(Math.floor((width * height) / 12000), 100);
        for (let i = 0; i < numberOfParticles; i++) {
            particles.push(new Particle());
        }
    }

    function connect() {
        for (let a = 0; a < particles.length; a++) {
            for (let b = a + 1; b < particles.length; b++) {
                let dx = particles[a].x - particles[b].x;
                let dy = particles[a].y - particles[b].y;
                let distanceSq = dx * dx + dy * dy;

                if (distanceSq < 15000) {
                    let opacity = 1 - (distanceSq / 15000);
                    ctx.strokeStyle = `rgba(0, 217, 255, ${opacity * 0.3})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }

            // Connect to mouse with neon green
            if (mouse.x && mouse.y) {
                let dxM = particles[a].x - mouse.x;
                let dyM = particles[a].y - mouse.y;
                let distanceMSq = dxM * dxM + dyM * dyM;
                if (distanceMSq < 20000) {
                    let opacity = 1 - (distanceMSq / 20000);
                    ctx.strokeStyle = `rgba(0, 255, 136, ${opacity * 0.6})`;
                    ctx.lineWidth = 1.2;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }
        connect();
    }

    resizeCanvas();
    animate();
}
