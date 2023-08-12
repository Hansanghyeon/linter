#!/bin/bash

# changeset의 변경이 있고 버전이 같다면 true를 리턴한다.
# is_check_changeset == true && is_check_version == false
# changeset의 변경이 없고 버전이 같지 않다면 true를 리턴한다
# is_check_changeset == false && is_check_version == true

#!/bin/bash

# Check if there are changes in the changeset and if the versions are the same.
# If both conditions are met, return "true", otherwise return "false".

# Check changeset
changeset_result=$(sh ./.github/config/check_changeset.sh)

# Check version
version_result=$(sh ./.github/config/check_version.sh)

# Check if both conditions are met
if [ "$changeset_result" = "true" ] && [ "$version_result" = "true" ]; then
    echo "true"
else
    echo "false"
fi
