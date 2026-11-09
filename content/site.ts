// Company details and form settings used across the site.
//
// FORMS: create one form per entry at formspree.io, then paste each form's
// endpoint here (it looks like https://formspree.io/f/abcdwxyz).
// Until a real ID is set, that form shows a "not connected yet" note instead of sending.
export const COMPANY = {
  name: 'SP Construction Group',
  email: 'Bids@SPConstructionGroup.com',
  careersEmail: 'careers@spconstructiongroup.com',
  phone: '(443) 300-0338',
};

export const FORMS = {
  budget: 'https://formspree.io/f/YOUR_FORM_ID', // sends to bids@
  subs: 'https://formspree.io/f/YOUR_FORM_ID', // sends to bids@ (or a subs@ address)
  careers: 'https://formspree.io/f/YOUR_FORM_ID', // sends to careers@
};
