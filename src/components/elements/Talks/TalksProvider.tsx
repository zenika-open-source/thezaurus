import {fetchTalks} from "@/components/elements/Talks/Talks.api";
import Talks from "@/components/elements/Talks/Talks";
import {Suspense} from "react";
import Spinner from "@/components/elements/Spinner/Spinner";

export default async function TalksProvider() {
    return (
        <Suspense fallback={<Spinner />}>
            <Talks talks={await fetchTalks()}/>
        </Suspense>
    )
}