# Switch to the feature branch
git checkout feature-branch-name

# Merge changes from develop (optional but often good to handle conflicts on feature branch)
git pull origin develop

# After resolving any conflicts and final local testing
git push origin feature-branch-name

# Switch to develop
git checkout develop

# Merge the feature branch into develop
git merge feature-branch-name

# Push the updated develop branch
git push origin develop
