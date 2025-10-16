// Color Tester Tool - Temporary for testing colors
document.addEventListener('DOMContentLoaded', function() {
    createColorTesterPanel();
});

function createColorTesterPanel() {
    // Create the color tester panel
    const panel = document.createElement('div');
    panel.id = 'color-tester-panel';
    panel.innerHTML = `
        <div class="color-tester-header">
            <h3>🎨 Test de Couleurs</h3>
            <button id="toggle-panel">−</button>
        </div>
        <div class="color-tester-content">
            <div class="color-section">
                <h4>Variables Principales</h4>
                <div class="color-control">
                    <label>Background Dark:</label>
                    <input type="color" id="bg-dark" value="#2A2A2A">
                </div>
                <div class="color-control">
                    <label>Background Darker:</label>
                    <input type="color" id="bg-darker" value="#1A1A1A">
                </div>
                <div class="color-control">
                    <label>Primary Color:</label>
                    <input type="color" id="primary-color" value="#8B4513">
                </div>
                <div class="color-control">
                    <label>Accent Color:</label>
                    <input type="color" id="accent-color" value="#D4AF37">
                </div>
                <div class="color-control">
                    <label>Text Dark:</label>
                    <input type="color" id="text-dark" value="#F5F5F5">
                </div>
                <div class="color-control">
                    <label>Text Light:</label>
                    <input type="color" id="text-light" value="#CCCCCC">
                </div>
            </div>
            
            <div class="color-section">
                <h4>Hero Section</h4>
                <div class="color-control">
                    <label>Hero Background:</label>
                    <input type="color" id="hero-bg" value="#2A2A2A">
                </div>
                <div class="color-control">
                    <label>Hero Title:</label>
                    <input type="color" id="hero-title" value="#D4AF37">
                </div>
                <div class="color-control">
                    <label>Hero Subtitle:</label>
                    <input type="color" id="hero-subtitle" value="#CCCCCC">
                </div>
            </div>
            
            <div class="color-section">
                <h4>About Section</h4>
                <div class="color-control">
                    <label>About Background:</label>
                    <input type="color" id="about-bg" value="#F5F5F5">
                </div>
                <div class="color-control">
                    <label>About Text:</label>
                    <input type="color" id="about-text" value="#444444">
                </div>
            </div>
            
            <div class="color-section">
                <h4>Team Section</h4>
                <div class="color-control">
                    <label>Team Background:</label>
                    <input type="color" id="team-bg" value="#2A2A2A">
                </div>
                <div class="color-control">
                    <label>Team Text:</label>
                    <input type="color" id="team-text" value="#F5F5F5">
                </div>
                <div class="color-control">
                    <label>Team Card Background:</label>
                    <input type="color" id="team-card-bg" value="#3A3A3A">
                </div>
                <div class="color-control">
                    <label>Team Card Text:</label>
                    <input type="color" id="team-card-text" value="#F5F5F5">
                </div>
                <div class="color-control">
                    <label>Team Card Border:</label>
                    <input type="color" id="team-card-border" value="#D4AF37">
                </div>
            </div>
            
            <div class="color-section">
                <h4>Conspiracy Section</h4>
                <div class="color-control">
                    <label>Conspiracy Background:</label>
                    <input type="color" id="conspiracy-bg" value="#1A1A1A">
                </div>
                <div class="color-control">
                    <label>Conspiracy Text:</label>
                    <input type="color" id="conspiracy-text" value="#F5F5F5">
                </div>
                <div class="color-control">
                    <label>Support Card Background:</label>
                    <input type="color" id="support-card-bg" value="#2A2A2A">
                </div>
                <div class="color-control">
                    <label>Support Card Border:</label>
                    <input type="color" id="support-card-border" value="#D4AF37">
                </div>
                <div class="color-control">
                    <label>Price Highlight:</label>
                    <input type="color" id="price-highlight" value="#D4AF37">
                </div>
                <div class="color-control">
                    <label>Price Description:</label>
                    <input type="color" id="price-description" value="#CCCCCC">
                </div>
                <div class="color-control">
                    <label>Option Highlighted Background:</label>
                    <input type="color" id="option-highlighted-bg" value="#8B4513">
                </div>
                <div class="color-control">
                    <label>Option Highlighted Text:</label>
                    <input type="color" id="option-highlighted-text" value="#F5F5F5">
                </div>
                <div class="color-control">
                    <label>Section Title Color:</label>
                    <input type="color" id="conspiracy-title" value="#D4AF37">
                </div>
            </div>
            
            <div class="color-section">
                <h4>Contact Section</h4>
                <div class="color-control">
                    <label>Contact Background:</label>
                    <input type="color" id="contact-bg" value="#1A1A1A">
                </div>
                <div class="color-control">
                    <label>Contact Text:</label>
                    <input type="color" id="contact-text" value="#F5F5F5">
                </div>
            </div>
            
            <div class="color-section">
                <h4>Polices</h4>
                <div class="color-control">
                    <label>Police Titres:</label>
                    <select id="font-heading">
                        <option value="'Playfair Display', serif">Playfair Display</option>
                        <option value="'Perpetua Titling MT', serif">Perpetua Titling MT</option>
                        <option value="'Times New Roman', serif">Times New Roman</option>
                        <option value="'Georgia', serif">Georgia</option>
                        <option value="'Garamond', serif">Garamond</option>
                        <option value="'Book Antiqua', serif">Book Antiqua</option>
                        <option value="'Palatino', serif">Palatino</option>
                        <option value="'Baskerville', serif">Baskerville</option>
                        <option value="'Minion Pro', serif">Minion Pro</option>
                        <option value="'Trajan Pro', serif">Trajan Pro</option>
                        <option value="'Optima', sans-serif">Optima</option>
                        <option value="'Futura', sans-serif">Futura</option>
                        <option value="'Helvetica', sans-serif">Helvetica</option>
                        <option value="'Arial', sans-serif">Arial</option>
                        <option value="'Verdana', sans-serif">Verdana</option>
                        <option value="'Trebuchet MS', sans-serif">Trebuchet MS</option>
                        <option value="'Gill Sans', sans-serif">Gill Sans</option>
                        <option value="'Avenir', sans-serif">Avenir</option>
                        <option value="'Proxima Nova', sans-serif">Proxima Nova</option>
                        <option value="'Montserrat', sans-serif">Montserrat</option>
                        <option value="'Open Sans', sans-serif">Open Sans</option>
                        <option value="'Lato', sans-serif">Lato</option>
                        <option value="'Roboto', sans-serif">Roboto</option>
                        <option value="'Inter', sans-serif">Inter</option>
                    </select>
                </div>
                <div class="color-control">
                    <label>Police Corps:</label>
                    <select id="font-body">
                        <option value="'Inter', sans-serif">Inter</option>
                        <option value="'Perpetua Titling MT', serif">Perpetua Titling MT</option>
                        <option value="'Georgia', serif">Georgia</option>
                        <option value="'Times New Roman', serif">Times New Roman</option>
                        <option value="'Garamond', serif">Garamond</option>
                        <option value="'Book Antiqua', serif">Book Antiqua</option>
                        <option value="'Palatino', serif">Palatino</option>
                        <option value="'Baskerville', serif">Baskerville</option>
                        <option value="'Helvetica', sans-serif">Helvetica</option>
                        <option value="'Arial', sans-serif">Arial</option>
                        <option value="'Verdana', sans-serif">Verdana</option>
                        <option value="'Trebuchet MS', sans-serif">Trebuchet MS</option>
                        <option value="'Gill Sans', sans-serif">Gill Sans</option>
                        <option value="'Avenir', sans-serif">Avenir</option>
                        <option value="'Proxima Nova', sans-serif">Proxima Nova</option>
                        <option value="'Montserrat', sans-serif">Montserrat</option>
                        <option value="'Open Sans', sans-serif">Open Sans</option>
                        <option value="'Lato', sans-serif">Lato</option>
                        <option value="'Roboto', sans-serif">Roboto</option>
                        <option value="'Source Sans Pro', sans-serif">Source Sans Pro</option>
                        <option value="'Nunito', sans-serif">Nunito</option>
                        <option value="'Poppins', sans-serif">Poppins</option>
                    </select>
                </div>
                <div class="color-control">
                    <label>Police Navigation:</label>
                    <select id="font-nav">
                        <option value="'Inter', sans-serif">Inter</option>
                        <option value="'Perpetua Titling MT', serif">Perpetua Titling MT</option>
                        <option value="'Helvetica', sans-serif">Helvetica</option>
                        <option value="'Arial', sans-serif">Arial</option>
                        <option value="'Futura', sans-serif">Futura</option>
                        <option value="'Optima', sans-serif">Optima</option>
                        <option value="'Gill Sans', sans-serif">Gill Sans</option>
                        <option value="'Avenir', sans-serif">Avenir</option>
                        <option value="'Montserrat', sans-serif">Montserrat</option>
                        <option value="'Open Sans', sans-serif">Open Sans</option>
                        <option value="'Lato', sans-serif">Lato</option>
                        <option value="'Roboto', sans-serif">Roboto</option>
                    </select>
                </div>
                <div class="color-control">
                    <label>Police Boutons:</label>
                    <select id="font-buttons">
                        <option value="'Inter', sans-serif">Inter</option>
                        <option value="'Perpetua Titling MT', serif">Perpetua Titling MT</option>
                        <option value="'Helvetica', sans-serif">Helvetica</option>
                        <option value="'Arial', sans-serif">Arial</option>
                        <option value="'Futura', sans-serif">Futura</option>
                        <option value="'Optima', sans-serif">Optima</option>
                        <option value="'Gill Sans', sans-serif">Gill Sans</option>
                        <option value="'Avenir', sans-serif">Avenir</option>
                        <option value="'Montserrat', sans-serif">Montserrat</option>
                        <option value="'Open Sans', sans-serif">Open Sans</option>
                        <option value="'Lato', sans-serif">Lato</option>
                        <option value="'Roboto', sans-serif">Roboto</option>
                    </select>
                </div>
            </div>
            
            <div class="color-section">
                <h4>Actions</h4>
                <button id="reset-colors" class="action-btn">Reset</button>
                <button id="export-colors" class="action-btn">Export CSS</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(panel);
    
    // Add styles for the panel
    addColorTesterStyles();
    
    // Add event listeners
    setupColorTesterEvents();
}

function addColorTesterStyles() {
    const style = document.createElement('style');
    style.textContent = `
        #color-tester-panel {
            position: fixed;
            top: 20px;
            right: 20px;
            width: 300px;
            background: white;
            border: 2px solid #D4AF37;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            z-index: 10000;
            font-family: Arial, sans-serif;
            max-height: 80vh;
            overflow-y: auto;
        }
        
        .color-tester-header {
            background: #D4AF37;
            color: white;
            padding: 10px 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 8px 8px 0 0;
        }
        
        .color-tester-header h3 {
            margin: 0;
            font-size: 16px;
        }
        
        #toggle-panel {
            background: none;
            border: none;
            color: white;
            font-size: 20px;
            cursor: pointer;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        #toggle-panel:hover {
            background: rgba(255,255,255,0.2);
        }
        
        .color-tester-content {
            padding: 15px;
        }
        
        .color-section {
            margin-bottom: 20px;
            border-bottom: 1px solid #eee;
            padding-bottom: 15px;
        }
        
        .color-section:last-child {
            border-bottom: none;
        }
        
        .color-section h4 {
            margin: 0 0 10px 0;
            color: #8B4513;
            font-size: 14px;
            font-weight: bold;
        }
        
        .color-control {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
        }
        
        .color-control label {
            font-size: 12px;
            color: #333;
            flex: 1;
        }
        
        .color-control input[type="color"] {
            width: 40px;
            height: 30px;
            border: 1px solid #ccc;
            border-radius: 4px;
            cursor: pointer;
        }
        
        .color-control select {
            width: 150px;
            height: 30px;
            border: 1px solid #ccc;
            border-radius: 4px;
            background: white;
            font-size: 11px;
            cursor: pointer;
        }
        
        .action-btn {
            background: #8B4513;
            color: white;
            border: none;
            padding: 8px 15px;
            border-radius: 5px;
            cursor: pointer;
            margin-right: 10px;
            font-size: 12px;
        }
        
        .action-btn:hover {
            background: #A0522D;
        }
        
        .color-tester-content.collapsed {
            display: none;
        }
    `;
    
    document.head.appendChild(style);
}

function setupColorTesterEvents() {
    // Toggle panel
    document.getElementById('toggle-panel').addEventListener('click', function() {
        const content = document.querySelector('.color-tester-content');
        const button = this;
        
        if (content.classList.contains('collapsed')) {
            content.classList.remove('collapsed');
            button.textContent = '−';
        } else {
            content.classList.add('collapsed');
            button.textContent = '+';
        }
    });
    
    // Color change events
    const colorInputs = document.querySelectorAll('#color-tester-panel input[type="color"]');
    colorInputs.forEach(input => {
        input.addEventListener('change', function() {
            applyColor(this.id, this.value);
        });
    });
    
    // Font change events
    const fontSelects = document.querySelectorAll('#color-tester-panel select');
    fontSelects.forEach(select => {
        select.addEventListener('change', function() {
            applyFont(this.id, this.value);
        });
    });
    
    // Reset colors
    document.getElementById('reset-colors').addEventListener('click', resetColors);
    
    // Export colors
    document.getElementById('export-colors').addEventListener('click', exportColors);
}

function applyColor(colorId, colorValue) {
    const root = document.documentElement;
    
    // Create or update a style element for overrides
    let styleElement = document.getElementById('color-tester-overrides');
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = 'color-tester-overrides';
        document.head.appendChild(styleElement);
    }
    
    switch(colorId) {
        case 'bg-dark':
            root.style.setProperty('--background-dark', colorValue);
            break;
        case 'bg-darker':
            root.style.setProperty('--background-darker', colorValue);
            break;
        case 'primary-color':
            root.style.setProperty('--primary-color', colorValue);
            break;
        case 'accent-color':
            root.style.setProperty('--accent-color', colorValue);
            break;
        case 'text-dark':
            root.style.setProperty('--text-dark', colorValue);
            break;
        case 'text-light':
            root.style.setProperty('--text-light', colorValue);
            break;
        case 'hero-bg':
            document.querySelector('.hero').style.background = colorValue;
            break;
        case 'hero-title':
            document.querySelector('.hero-title').style.color = colorValue;
            document.querySelector('.hero-title').style.setProperty('-webkit-text-fill-color', colorValue, 'important');
            break;
        case 'hero-subtitle':
            document.querySelector('.hero-subtitle').style.color = colorValue;
            break;
        case 'about-bg':
            document.querySelector('.about').style.background = colorValue;
            break;
        case 'about-text':
            styleElement.textContent += `.about p, .about h2, .about h3, .about-text, .about-story p { color: ${colorValue} !important; }\n`;
            break;
        case 'team-bg':
            document.querySelector('.team').style.background = colorValue;
            break;
        case 'team-text':
            styleElement.textContent += `.team h2, .team h3, .team p, .member-description, .team .section-header h2, .team .section-header p { color: ${colorValue} !important; }\n`;
            break;
        case 'team-card-bg':
            styleElement.textContent += `.team-member, .member-info { background: ${colorValue} !important; }\n`;
            break;
        case 'team-card-text':
            styleElement.textContent += `.team-member h3, .team-member p, .member-description { color: ${colorValue} !important; }\n`;
            break;
        case 'team-card-border':
            styleElement.textContent += `.team-member { border: 2px solid ${colorValue} !important; }\n`;
            break;
        case 'conspiracy-bg':
            document.querySelector('.conspiracy').style.background = colorValue;
            break;
        case 'conspiracy-text':
            styleElement.textContent += `.conspiracy h2, .conspiracy h3, .conspiracy h4, .conspiracy h5, .conspiracy p, .conspiracy li, .conspiracy .section-header h2, .conspiracy .section-header p { color: ${colorValue} !important; }\n`;
            break;
        case 'support-card-bg':
            styleElement.textContent += `.support-section, .support-option, .preorder-option, .experience-option, .winemaker-option { background: ${colorValue} !important; }\n`;
            break;
        case 'support-card-border':
            styleElement.textContent += `.support-section, .support-option, .preorder-option, .experience-option, .winemaker-option { border: 2px solid ${colorValue} !important; }\n`;
            break;
        case 'price-highlight':
            styleElement.textContent += `.price-highlight { color: ${colorValue} !important; }\n`;
            break;
        case 'price-description':
            styleElement.textContent += `.price-description { color: ${colorValue} !important; }\n`;
            break;
        case 'option-highlighted-bg':
            styleElement.textContent += `.winemaker-option.highlighted { background: ${colorValue} !important; }\n`;
            break;
        case 'option-highlighted-text':
            styleElement.textContent += `.winemaker-option.highlighted .price-highlight, .winemaker-option.highlighted .price-description { color: ${colorValue} !important; }\n`;
            break;
        case 'conspiracy-title':
            styleElement.textContent += `.conspiracy .section-header h2 { color: ${colorValue} !important; }\n`;
            break;
        case 'contact-bg':
            document.querySelector('.contact').style.background = colorValue;
            break;
        case 'contact-text':
            styleElement.textContent += `.contact h2, .contact h3, .contact p, .contact .section-header h2, .contact .section-header p, .contact-item strong, .contact-item p { color: ${colorValue} !important; }\n`;
            break;
    }
}

function applyFont(fontId, fontValue) {
    // Create or update a style element for font overrides
    let styleElement = document.getElementById('font-tester-overrides');
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = 'font-tester-overrides';
        document.head.appendChild(styleElement);
    }
    
    switch(fontId) {
        case 'font-heading':
            document.documentElement.style.setProperty('--font-heading', fontValue);
            styleElement.textContent += `h1, h2, h3, h4, h5, h6 { font-family: ${fontValue} !important; }\n`;
            break;
        case 'font-body':
            document.documentElement.style.setProperty('--font-body', fontValue);
            styleElement.textContent += `body, p, div, span { font-family: ${fontValue} !important; }\n`;
            break;
        case 'font-nav':
            styleElement.textContent += `.nav-menu a, .nav-links a { font-family: ${fontValue} !important; }\n`;
            break;
        case 'font-buttons':
            styleElement.textContent += `.btn, button { font-family: ${fontValue} !important; }\n`;
            break;
    }
}

function resetColors() {
    // Clear the override styles
    const colorStyleElement = document.getElementById('color-tester-overrides');
    if (colorStyleElement) {
        colorStyleElement.textContent = '';
    }
    
    // Clear font override styles
    const fontStyleElement = document.getElementById('font-tester-overrides');
    if (fontStyleElement) {
        fontStyleElement.textContent = '';
    }
    
    // Reset to original values
    const originalColors = {
        'bg-dark': '#2A2A2A',
        'bg-darker': '#1A1A1A',
        'primary-color': '#8B4513',
        'accent-color': '#D4AF37',
        'text-dark': '#F5F5F5',
        'text-light': '#CCCCCC',
        'hero-bg': '#2A2A2A',
        'hero-title': '#D4AF37',
        'hero-subtitle': '#CCCCCC',
        'about-bg': '#F5F5F5',
        'about-text': '#444444',
        'team-bg': '#2A2A2A',
        'team-text': '#F5F5F5',
        'team-card-bg': '#3A3A3A',
        'team-card-text': '#F5F5F5',
        'team-card-border': '#D4AF37',
        'conspiracy-bg': '#1A1A1A',
        'conspiracy-text': '#F5F5F5',
        'support-card-bg': '#2A2A2A',
        'support-card-border': '#D4AF37',
        'price-highlight': '#D4AF37',
        'price-description': '#CCCCCC',
        'option-highlighted-bg': '#8B4513',
        'option-highlighted-text': '#F5F5F5',
        'conspiracy-title': '#D4AF37',
        'contact-bg': '#1A1A1A',
        'contact-text': '#F5F5F5'
    };
    
    const originalFonts = {
        'font-heading': "'Playfair Display', serif",
        'font-body': "'Inter', sans-serif",
        'font-nav': "'Inter', sans-serif",
        'font-buttons': "'Inter', sans-serif"
    };
    
    Object.entries(originalColors).forEach(([id, value]) => {
        const input = document.getElementById(id);
        if (input) {
            input.value = value;
            applyColor(id, value);
        }
    });
    
    Object.entries(originalFonts).forEach(([id, value]) => {
        const select = document.getElementById(id);
        if (select) {
            select.value = value;
            applyFont(id, value);
        }
    });
}

function exportColors() {
    const colorInputs = document.querySelectorAll('#color-tester-panel input[type="color"]');
    const fontSelects = document.querySelectorAll('#color-tester-panel select');
    let css = '/* Exported Colors and Fonts from Color Tester */\n:root {\n';
    
    colorInputs.forEach(input => {
        const value = input.value;
        const id = input.id;
        
        switch(id) {
            case 'bg-dark':
                css += `    --background-dark: ${value};\n`;
                break;
            case 'bg-darker':
                css += `    --background-darker: ${value};\n`;
                break;
            case 'primary-color':
                css += `    --primary-color: ${value};\n`;
                break;
            case 'accent-color':
                css += `    --accent-color: ${value};\n`;
                break;
            case 'text-dark':
                css += `    --text-dark: ${value};\n`;
                break;
            case 'text-light':
                css += `    --text-light: ${value};\n`;
                break;
        }
    });
    
    // Add font variables
    fontSelects.forEach(select => {
        const value = select.value;
        const id = select.id;
        
        switch(id) {
            case 'font-heading':
                css += `    --font-heading: ${value};\n`;
                break;
            case 'font-body':
                css += `    --font-body: ${value};\n`;
                break;
        }
    });
    
    css += '}\n\n';
    
    // Add section-specific styles
    css += `/* Section Backgrounds */\n`;
    css += `.hero { background: ${document.getElementById('hero-bg').value}; }\n`;
    css += `.about { background: ${document.getElementById('about-bg').value}; }\n`;
    css += `.team { background: ${document.getElementById('team-bg').value}; }\n`;
    css += `.conspiracy { background: ${document.getElementById('conspiracy-bg').value}; }\n`;
    css += `.contact { background: ${document.getElementById('contact-bg').value}; }\n`;
    
    css += `\n/* Team Cards */\n`;
    css += `.team-member, .member-info { background: ${document.getElementById('team-card-bg').value}; }\n`;
    css += `.team-member h3, .team-member p, .member-description { color: ${document.getElementById('team-card-text').value}; }\n`;
    css += `.team-member { border: 2px solid ${document.getElementById('team-card-border').value}; }\n`;
    
    css += `\n/* Conspiracy Section */\n`;
    css += `.support-section, .support-option, .preorder-option, .experience-option, .winemaker-option { background: ${document.getElementById('support-card-bg').value}; }\n`;
    css += `.support-section, .support-option, .preorder-option, .experience-option, .winemaker-option { border: 2px solid ${document.getElementById('support-card-border').value}; }\n`;
    css += `.price-highlight { color: ${document.getElementById('price-highlight').value}; }\n`;
    css += `.price-description { color: ${document.getElementById('price-description').value}; }\n`;
    css += `.winemaker-option.highlighted { background: ${document.getElementById('option-highlighted-bg').value}; }\n`;
    css += `.winemaker-option.highlighted .price-highlight, .winemaker-option.highlighted .price-description { color: ${document.getElementById('option-highlighted-text').value}; }\n`;
    css += `.conspiracy .section-header h2 { color: ${document.getElementById('conspiracy-title').value}; }\n`;
    
    css += `\n/* Font Styles */\n`;
    css += `h1, h2, h3, h4, h5, h6 { font-family: ${document.getElementById('font-heading').value}; }\n`;
    css += `body, p, div, span { font-family: ${document.getElementById('font-body').value}; }\n`;
    css += `.nav-menu a, .nav-links a { font-family: ${document.getElementById('font-nav').value}; }\n`;
    css += `.btn, button { font-family: ${document.getElementById('font-buttons').value}; }\n`;
    
    // Copy to clipboard
    navigator.clipboard.writeText(css).then(() => {
        alert('CSS exporté dans le presse-papiers !');
    }).catch(() => {
        // Fallback: show in console
        console.log('CSS Exporté:', css);
        alert('CSS affiché dans la console !');
    });
}
