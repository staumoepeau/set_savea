# Copyright (c) 2023, Sione Taumoepeau and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document

class HouseholdMembers(Document):


	def validate(self):
		self.update_id()
	
	def update_id(self):
		self.membersid = self.name
