postpublish:
	echo "published"

check_changeset:
	sh ./.github/config/check_changeset.sh

check_version:
	sh ./.github/config/check_version.sh

is_run_changeset:
	result=$$(sh ./.github/config/is_run_changeset.sh); \
	echo "$$result"