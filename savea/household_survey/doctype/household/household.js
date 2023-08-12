// Copyright (c) 2022, Sione Taumoepeau & Nau Hoi Taumoepeau and contributors
// For license information, please see license.txt

frappe.ui.form.on('Household', {

	refresh: function(frm){
		display_D6(frm);

		frm.set_query("village", function() {
			return {
				"filters": { "island": ["=", frm.doc.region]}
			};
		});

		frm.set_query("distric", function() {
			return {
				"filters": { "island": ["=", frm.doc.region]}
			};
			console.log(frm.doc.region)
		});

		frm.set_query("e_2", function() {
			return {
				"filters": { "e01": ["=", frm.doc.e_1]}
			};
		});

		frm.set_query("e_5", function() {
			return {
				"filters": { "e04": ["=", frm.doc.e_4]}
			};
		});


	},

	onload: function(frm){

		display_E6(frm);
		display_D6(frm);
	},

	e_2: function(frm){

		display_E6(frm);
	},

	d_6: function(frm){
		display_D6(frm);
	},
});



var display_E6 = function(frm){

	const E2List_2 = ["Student full time","Student part-time",
			"Home duties","Retired/ too old","None: no work, no gardening"]

	const E2List_1 = ["Employer","Producing goods or services for sale/ Running a business",
			"Employee working for wages in the public sector","Employee working for wages for a private sector",
			"Producing goods or services for own/family consumption","Unpaid family worker (family business, plantation)",
			"Unpaid family worker (helps with essential household duties)", "Voluntary work/community work (for free)"]
	
	if (frm.doc.e_2){
		if (E2List_1.includes(frm.doc.e_2)){
			frm.set_df_property("e6", "hidden", 0);
		} else {
			frm.set_df_property("e6", "hidden", 1);
		}
	} else {
		frm.set_df_property("e6", "hidden", 1);
	}

	if (frm.doc.e_2){
		if (E2List_2.includes(frm.doc.e_2)){
			frm.set_value("end_of_survey", "THANK YOU THAT THE END OF THE SURVEY. PLEASE COMPLETE THE FEEDBACK BEFORE YOU LEAVE")
		} else
		{
			frm.set_value("end_of_survey", " ")
		}
	} else {
		frm.set_value("end_of_survey", " ")
	}
}

var display_D6 = function(frm){
	
	const D6List_02 = [
			"Over 6 months - 9 months after graduation", "Over 9 to - 12 months after graduation",
			"More than one year after graduation"]

	const D6List_03 = ["I have not been employed since graduation"]
	
	if (frm.doc.d_6){
		if (D6List_02.includes(frm.doc.d_6)){
				frm.set_df_property("d_7", "hidden", 1);
			} else {
					frm.set_df_property("d_7", "hidden", 0);
				}
	} else {
		frm.set_df_property("d_7", "hidden", 0);
	}
	//alert(frm.doc.d_6)

	if (frm.doc.d_6){
		if (D6List_03.includes(frm.doc.d_6)){
			frm.set_df_property("d_7", "hidden", 1);
			frm.set_df_property("d_8", "hidden", 1);
			frm.set_df_property("d_9", "hidden", 1);
			frm.set_df_property("d_10", "hidden", 1);
			frm.set_df_property("d_11", "hidden", 1);
			frm.set_df_property("d_12", "hidden", 1);
			
		} else {
			frm.set_df_property("d_7", "hidden", 0);
			frm.set_df_property("d_8", "hidden", 0);
			frm.set_df_property("d_9", "hidden", 0);
			frm.set_df_property("d_10", "hidden", 0);
			frm.set_df_property("d_11", "hidden", 0);
			frm.set_df_property("d_12", "hidden", 0);
			
			}
	} else {
		frm.set_df_property("d_7", "hidden", 0);
		frm.set_df_property("d_8", "hidden", 0);
		frm.set_df_property("d_9", "hidden", 0);
		frm.set_df_property("d_10", "hidden", 0);
		frm.set_df_property("d_11", "hidden", 0);
		frm.set_df_property("d_12", "hidden", 0);
	}
		
}