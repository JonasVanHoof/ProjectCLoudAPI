using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using RestAPI.Models;

namespace RestAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<LibraryContext>(
                 DBconfig => DBconfig.UseSqlServer(
                     Configuration.GetConnectionString("circus_materialDB")
                 )
             );

            //services.AddDbContext<LibraryContext>(
            //    DBconfig => DBconfig.UseMySQL(
            //        Configuration.GetConnectionString("circus_materialDB")
            //    )
            //);
            //services.AddAuthentication(options =>
            //{
            //    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            //    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            //}).AddJwtBearer(options =>
            //{
            //    options.Authority = 'https://jonasvanhoof.eu.auth0.com/';
            //    options.Audience = 'http://localhost:4200';
            //});

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, LibraryContext context)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseCors(builder =>
                    builder.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader());
            }
            else
            {
                app.UseHsts();
            }
            //app.UseAuthentication();
            app.UseHttpsRedirection();
            DBInitializer.Initialize(context);
            app.UseMvc(
                //routes =>
                //{
                //    routes.MapRoute(
                //      name: 'default',
                //      template: '{controller=Home}/{action=Index}/{id?}');
                //}
                );
        }
    }
}
