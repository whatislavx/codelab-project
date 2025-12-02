// Tab functionality for course details page
document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabLinks.length > 0) {
        tabLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetTab = this.getAttribute('data-tab');
                
                // Remove active class from all tabs and contents
                tabLinks.forEach(l => l.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked tab and corresponding content
                this.classList.add('active');
                const targetContent = document.getElementById(targetTab);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
        
        // Handle hash in URL
        if (window.location.hash) {
            const hash = window.location.hash.substring(1);
            const tabLink = document.querySelector(`[data-tab="${hash}"]`);
            if (tabLink) {
                tabLink.click();
            }
        }
    }
    
    // Highlight active navigation link
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (linkPath === currentPath || (currentPath.startsWith('/course/') && linkPath === '/courses')) {
            link.classList.add('active');
        }
    });

    // Custom Select Logic
    function initCustomSelects() {
        const customSelectContainers = document.querySelectorAll('.filter-dropdown');
        
        customSelectContainers.forEach(container => {
            const select = container.querySelector('select');
            if (!select) return;
            
            // Check if already initialized
            if (container.querySelector('.custom-select')) return;

            // Hide original select
            select.style.display = 'none';

            // Create custom select wrapper
            const customSelect = document.createElement('div');
            customSelect.setAttribute('class', 'custom-select');
            
            // Create selected item div
            const selectedDiv = document.createElement('div');
            selectedDiv.setAttribute('class', 'select-selected');
            selectedDiv.innerHTML = select.options[select.selectedIndex].innerHTML;
            customSelect.appendChild(selectedDiv);
            
            // Create options container
            const optionsDiv = document.createElement('div');
            optionsDiv.setAttribute('class', 'select-items select-hide');
            
            // Create options
            Array.from(select.options).forEach((option, index) => {
                const optionDiv = document.createElement('div');
                optionDiv.innerHTML = option.innerHTML;
                
                if (index === select.selectedIndex) {
                    optionDiv.classList.add('same-as-selected');
                }
                
                optionDiv.addEventListener('click', function(e) {
                    // Update original select
                    select.selectedIndex = index;
                    selectedDiv.innerHTML = this.innerHTML;
                    
                    // Update active class
                    const sameAsSelected = optionsDiv.querySelectorAll('.same-as-selected');
                    sameAsSelected.forEach(el => el.classList.remove('same-as-selected'));
                    this.classList.add('same-as-selected');
                    
                    // Trigger change event on original select
                    select.dispatchEvent(new Event('change'));
                    
                    // Close dropdown
                    selectedDiv.click();
                });
                
                optionsDiv.appendChild(optionDiv);
            });
            
            customSelect.appendChild(optionsDiv);
            container.appendChild(customSelect);
            
            // Toggle dropdown on click
            selectedDiv.addEventListener('click', function(e) {
                e.stopPropagation();
                closeAllSelect(this);
                this.nextSibling.classList.toggle('select-hide');
                this.classList.toggle('select-arrow-active');
            });
        });
        
        function closeAllSelect(elmnt) {
            const items = document.querySelectorAll('.select-items');
            const selecteds = document.querySelectorAll('.select-selected');
            const arrNo = [];
            
            selecteds.forEach((el, index) => {
                if (elmnt == el) {
                    arrNo.push(index);
                } else {
                    el.classList.remove('select-arrow-active');
                }
            });
            
            items.forEach((el, index) => {
                if (arrNo.indexOf(index)) {
                    el.classList.add('select-hide');
                }
            });
        }
        
        document.addEventListener('click', closeAllSelect);
    }

    initCustomSelects();
});

