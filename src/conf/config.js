const config = {
  VITE_APWRITE_URL: String(import.meta.env.VITE_APWRITE_URL),
  VITE_APWRITE_PROJECT_ID: String(import.meta.env.VITE_APWRITE_PROJECT_ID),
  VITE_APWRITE_BUCKET_ID: String(import.meta.env.VITE_APWRITE_BUCKET_ID),
  VITE_APWRITE_COLLECTION_ID: String(
    import.meta.env.VITE_APWRITE_COLLECTION_ID
  ),
  VITE_APWRITE_DATABASE_ID: String(import.meta.env.VITE_APWRITE_DATABASE_ID),
};
export default config;
