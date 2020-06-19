<template>

	<view>
		<!-- <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item>
				<view class="swiper-item uni-bg-red">A</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-green">B</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-blue">C</view>
			</swiper-item>
		</swiper> -->

	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			this.getHomeData()
			
		},
		components: {},
		methods: {
			// 获取首页数据
			async getHomeData(){
				const res = await this.$myRequest({
					url:'getPostList.php',
					methods:'POST'
				})
				console.log(res);
			}
			
		}
	}
</script>

<style>

</style>
