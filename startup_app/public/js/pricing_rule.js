frappe.ui.form.on('Pricing Rule', {
    refresh: function(frm) {
        frm.trigger("toggle_additional_discount");
        frm.trigger("toggle_promotional_scheme");
    },

    additional_discount: function(frm) {
        frm.trigger("toggle_additional_discount");
    },

    promotional_scheme: function(frm) {
        frm.trigger("toggle_promotional_scheme");
    },

    toggle_additional_discount: function(frm) {
        if (frm.doc.additional_discount) {
            frm.set_df_property("addl_valid_from", "hidden", 0);
            frm.set_df_property("addl_valid_to", "hidden", 0);
            frm.set_df_property("addl_discount_percentage", "hidden", 0);
        } else {
            frm.set_df_property("addl_valid_from", "hidden", 1);
            frm.set_df_property("addl_valid_to", "hidden", 1);
            frm.set_df_property("addl_discount_percentage", "hidden", 1);
        }
    },

    toggle_promotional_scheme: function(frm) {
        if (frm.doc.promotional_scheme) {
            frm.set_df_property("scheme_min_qty", "hidden", 0);
            frm.set_df_property("scheme_valid_from", "hidden", 0);
            frm.set_df_property("scheme_valid_to", "hidden", 0);
        } else {
            frm.set_df_property("scheme_name", "hidden", 1);
            frm.set_df_property("scheme_min_qty", "hidden", 1);
            frm.set_df_property("scheme_valid_from", "hidden", 1);
            frm.set_df_property("scheme_valid_to", "hidden", 1);
        }
    }
});
