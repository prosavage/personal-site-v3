import { ArticleLayout } from "../components/ArticleLayout"
import ArticleContent from "./article.mdx"

export default function Page() {
      return <ArticleLayout
            title={"EnigmaPool"}
            tags={["System Design", "Blockchain", "SaaS"]}
            dateStr="Sept 15. 2023"
      >
            <ArticleContent />
      </ArticleLayout>
}