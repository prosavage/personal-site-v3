import { ArticleLayout } from "../components/ArticleLayout"
import ArticleContent from "./article.mdx"

export default function Page() {
      return <ArticleLayout title={"SavageLabs"} tags={["Java", "Kotlin", "Web Development"]} dateStr="Sept 15. 2023">
            <ArticleContent/>
      </ArticleLayout>
}