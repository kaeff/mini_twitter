require 'test_helper'

class TweetsControllerTest < ActionController::TestCase
  setup do
    @tweet = tweets(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:tweets)
    assert_not_nil assigns(:tweet)
  end

  test "should create tweet" do
    assert_difference('Tweet.count') do
      post :create, tweet: { content: @tweet.content }
    end

    assert_response :created
    assert_template 'tweets/show'
  end

  test "should show tweet" do
    get :show, id: @tweet

    assert_response :success
    assert_template 'tweets/show'
  end

  test "should destroy tweet" do
    assert_difference('Tweet.count', -1) do
      delete :destroy, id: @tweet
    end

    assert_redirected_to tweets_path
  end
end
