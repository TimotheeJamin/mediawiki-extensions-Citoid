<?php

/**
 * Minimal set of classes necessary to fulfill needs of parts of Citoid relying on
 * the Wikibase extension.
 * phpcs:disable MediaWiki.Files.ClassMatchesFilename,Generic.Files.OneObjectStructurePerFile,MediaWiki.Commenting.FunctionComment
 */

namespace Wikibase\Repo {
	class WikibaseRepo {
		public static function getDefaultInstance(): self {
		}

		public static function getEntityNamespaceLookup(): \Wikibase\Lib\Store\EntityNamespaceLookup {
		}
	}
}

namespace Wikibase\Lib\Store {
	class EntityNamespaceLookup {
		public function isEntityNamespace( int $ns ): bool {
		}
	}
}
