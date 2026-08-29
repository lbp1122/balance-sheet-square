# Google Play release checklist

1. Wait for Play Console identity verification to finish and verify the contact phone number.
2. Create a dedicated public support email, add it to the Play listing and privacy policy, then create the app with package ID `com.lbp.balancesheetsquare`.
3. Complete App access, Ads, Content rating, Target audience, Data safety, Financial features, and Government apps declarations.
4. Use the entries in `store-listing.md`; upload the icon, feature graphic, and phone screenshots.
5. Create the Play App Signing key inside Play Console. Never commit a keystore or its passwords to GitHub.
6. Build a signed Android App Bundle (`.aab`) and upload it to an internal testing track first.
7. For a new personal developer account, complete Google's required closed test with the required testers and duration shown in your Play Console.
8. Test first launch, offline relaunch, local saving, all languages, PDF save/share, the privacy link, and back navigation on real Android devices.
9. Apply for production access after the testing requirement is complete, then submit the production release for review.

The included GitHub workflow creates a debug APK and an unsigned release AAB. The final Play upload must be signed after Play App Signing is configured.
