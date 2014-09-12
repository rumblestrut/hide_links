jQuery(document).ready(function(){

	// Disables all left-hand navigation links except for Public Works
	jQuery('#block-menu-menu-department-sops ul.menu li').each(function(e) { 
		if (!jQuery(this).hasClass('menu-item-620')) { 
			jQuery(this).click(function() { 
				alert("This department has no SOPs in the system. Only Public Works is working at this time."); 
				return false;
			}); 
		}; 
	});
});
