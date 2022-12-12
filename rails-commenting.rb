# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb


# >>>>>>>>>>>> For simplicity, I would like to designate 'RR' for 'RESTful Routes'.<<<<<<<<<<<<<<<<<<<
#_________________________________________________________________________________________
# ---1) 
class BlogPostsController < ApplicationController
  def index #>>>>>> This is in the routes folder. The "index" signifies sending back the entire list of data, it is a RESTful Route method.
    # ---2)
    @posts = BlogPost.all #>>>>>> @posts is the parameter for the 'BlogPost' controller. .all is the SQL command to show entire database.
  end

  # ---3)
  def show
    @post = BlogPost.find(params[:id]) #>>>>>> In the routes folder, using RR 'show' method, this will send back only one instance of the model being queried. Route will only expect 1 param, hence (params[:id]), the :id will make an Active Record, and will come from the url param.
  end

  # ---4)
  def new
    @post = BlogPost.new #>>>>>>>>The RR method 'new' will allow a user to view a form, which can be written in by user. This will be added and stored in the database with 'create'.
  end

  def create
    # ---5)
    @post = BlogPost.create(blog_post_params) #>>>>> This is the 'create' RR method and it submits the user data into the database. This is also a 'post' http request because of the submitting action. If the user enters the correct criteria, a redirect will be triggered with reference to the route alias '_path'.
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)
    @post = BlogPost.find(params[:id]) #>>>>> 'edit' is a RR method similar to 'new' in that it allows user to fill out data to send, but this allows updating an already created instance within the database.
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    @post.update(blog_post_params) #>>>>> This is the action of overwriting an instance in the database. 'update', another RR method, again is using an alias for a redirect, as long as the entered data by the user meets the requirements. 
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      redirect_to blog_posts_path #>>>>>> This will trigger a redirect once the 'destroy' RR method processes. 'destroy' removes an instance from the database.
    end
  end

  # ---9)
  private
  def blog_post_params #>>>>> 'private' is a specific Ruby keyword that disables a param from being called elsewhwere in the program. This essentially restricts the scope of where a method can be called. The keyword is best placed at the top of the code because everything below will be under it's protection.
    # ---10)
    params.require(:blog_post).permit(:title, :content) #>>>>>> This is a strong parameter that dictates what is allowed and not allowed in the database. It is taking in two arguments using the two methods: require and permit. The 'require' method requires what is passed through to be stricily found in the update or create methods. The 'permit' method allows only particular items to be present. In this particular case, columns :title & :content are available for the user. If none are present the user can still proceed.
  end
end
