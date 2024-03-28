<script lang="ts">
	import { ArrowUpLeft } from 'lucide-svelte';
</script>

<div class="mx-auto flex flex-row items-start justify-center gap-10 pt-10 md:gap-32">
	<!-- go back link -->
	<a href="/" class="relative flex gap-2 text-plain-200/90">
		<span>
			<ArrowUpLeft class="square-6" />
		</span>
		<span>
			<em class="font-reader text-[18px]">Home</em>
		</span>
	</a>
	<!-- article -->
	<article class="prose lg:prose-xl">
		<h4 class="font-serif font-light italic text-plain-200">WarHazard</h4>
		<div class="text-base text-plain-400">
			<p>
				The aim of this project was to provide a hazard score for all locations in Ukraine that were
				involved in war-related events such as battles, explosions/remote violence events, violence
				against civilians and factors that pose risk to civilians living in those locations. The
				idea is to take those factors and condense them into one readable and comprehensible score
				which would reflect the danger level of the associated location.
			</p>
			<p>
				The main issue I have faced while developing a statistical method that could provide such a
				score was to combine domain knowledge and account for the known unknowns. In complex events
				like wars, it's very difficult to obtain a comprehensive dataset that can capture the
				underlying dynamics. Not because of lack of data but due to the abundance and sheer number
				of factors involved that are either too hard or too expensive to account for. Furthermore,
				the issue of inherent bias involved in various sources is also prevalent and poses a serious
				risk of polluting a dataset. Hence, besides accounting for all factors that contribute to an
				event, one must also consider how valid the data that they’re using is. Therefore, I decided
				to use the data provided to me by ACLED for non-commercial purposes, the aim of this project
				is for data exploration, visualization and awareness. ACLED is a non-profit organization
				that has been collecting data on armed conflict events since 2014.
			</p>
			<p>
				ACLED’s raw dataset was comprehensive enough to include three levels of administrative
				borders for each location, event types, sub events, dates, casualties, presence of civilian
				targeting, what actors were involved in the event, and a text based note column that
				included additional information pertaining to the event. As mentioned before, due the
				complexity and nature of armed conflicts there are a significant number of factors that
				cannot be accounted for and some are just not available to the public. Namely for this
				project, ideally, I would need access to air defense numbers in a location, overall
				equipment concentration, the number of missiles that have been launched in a remote violence
				event, where they were launched from, how many have been shot down, logistic routes and hubs
				and this is just to name a few. Some of this data is available to the public, but the
				sources are sparse and inconsistent. In other words, the known unknowns. Hence, for now I
				have decided to use the baseline data set from ACLED and process the data enough to account
				for some of those factors I mentioned earlier.
			</p>
			<p class="italic">
				<span class="text-plain-200">Quick note on the project's implementation:</span> everything was
				done using python and various data processing libraries, numpy and pandas being at the core of
				it and plotly’s dash was used for making the web app.
			</p>
		</div>
		<!-- ... -->
	</article>
</div>
