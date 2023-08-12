# -*- coding: utf-8 -*-
# Copyright (c) 2022, Sione Taumoepeau and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
from audioop import reverse
from dataclasses import fields
import math
import frappe
from frappe import _, msgprint


@frappe.whitelist()
def get_members(household_id):
	#frappe.msgprint(_("Members ID {0}").format(household_id))

	members_list = frappe.db.sql(f"""SELECT full_name, relationship, gender, age FROM `tabHousehold Members Table` WHERE parent='{household_id}' """, as_dict=True)

	#frappe.msgprint(_("Members List {0}").format(members_list))
	return members_list

@frappe.whitelist()
def get_members_info(doctype, txt, searchfield, start, page_len, filters):

	return frappe.db.sql("""SELECT parent, name, full_name, relationship, gender, age FROM `tabHousehold Members Table` WHERE relationship='Head' """.format(code= filters.get("client")))
#	frappe.msgprint(_("Members List {0}").format(members))
	
