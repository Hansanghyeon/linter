postpublish:
	echo "published"

check_version:
	sh ./.github/config/check_version.sh

is_run:
	sh ./.github/config/is_run.sh

get_version:
	sh ./.github/config/get_version.sh

install:
	pnpm i