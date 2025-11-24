# Deployment Authentication

## Method: Publish Profile
Since we're using an existing App Service, we use the publish profile method for simpler authentication.

## Configuration
- **Secret Name**: `AZURE_PUBLISH_PROFILE`
- **Type**: .PublishSettings XML content
- **Scope**: Limited to INNIAPP App Service only

## Benefits
- No need for service principal permissions
- Simple setup
- Secure credential storage in GitHub
- Direct deployment capability

## Security Notes
- Publish profile is app-specific
- Can be regenerated if compromised
- No access to other Azure resources
