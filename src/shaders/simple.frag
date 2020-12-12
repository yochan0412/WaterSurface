#version 430 core
out vec4 f_color;

in vec3 o_position;
in vec3 o_normal;
in vec2 o_texture_coordinate;
in vec3 o_color;

uniform sampler2D u_texture;
uniform bool u_useTexture;

void main()
{   
    if(u_useTexture)
    {
       vec3 color = vec3(texture(u_texture, o_texture_coordinate));
       f_color = vec4(color, 1.0f);
    }
}