import { ThumbsDown, ThumbsUp } from "lucide-react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

function SingleQuotes({ quote, handleDelete, onLike, onDislike }) {
    return <Card>
        <CardHeader>
            <CardTitle className="text-lg">{quote.title}</CardTitle>
            <CardDescription>Total Likes:{quote.likes}</CardDescription>
        </CardHeader>

        <CardFooter className="flex gap-2">
            <Button variant="outline" onClick={() => onLike(quote.id)}><ThumbsUp /></Button>
            <Button variant="outline" onClick={() => onDislike(quote.id)}><ThumbsDown /></Button>
            <Button variant="destructive" onClick={() => handleDelete(quote.id)}>Delete</Button>
        </CardFooter>
    </Card>

}

export default SingleQuotes;